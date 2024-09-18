import { TestBed } from '@angular/core/testing';
import { Router, UrlTree } from '@angular/router';
import { applicationGuard } from './application-guard.service';
import { UserService } from '../user/user.service';

describe('applicationGuard', () => {
  let userService: UserService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: UserService, useValue: jasmine.createSpyObj('UserService', ['isUserLoggedAndAccessTokenValid']) },
        { provide: Router, useValue: jasmine.createSpyObj('Router', ['createUrlTree']) }
      ]
    });

    userService = TestBed.inject(UserService);
    router = TestBed.inject(Router);
  });

  it('should return true if user is logged and token is valid', () => {
    (userService.isUserLoggedAndAccessTokenValid as jasmine.Spy).and.returnValue(true);

    const result = applicationGuard({} as any, {} as any);

    expect(result).toBeTrue();
  });

  it('should redirect to login if user is not logged or token is invalid', () => {
    (userService.isUserLoggedAndAccessTokenValid as jasmine.Spy).and.returnValue(false);
    const urlTree: UrlTree = {} as UrlTree; // Define urlTree as UrlTree
    (router.createUrlTree as jasmine.Spy).and.returnValue(urlTree);

    const result = applicationGuard({} as any, {} as any);

    expect(result).toEqual(urlTree); // Use toEqual for object comparison
  });
});
