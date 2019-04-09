import { UserService } from './user.service';
import { TestBed,async,ComponentFixture } from '@angular/core/testing';
import {BrowserModule} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';



describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });
});
