import {
it,
inject,
injectAsync,
beforeEachProviders,
TestComponentBuilder
} from 'angular2/testing';

import {Component, provide} from 'angular2/core';

import {Logger} from './common/services/logger.service';
import {AppComponent} from './app.component';

describe('Test: AppComponent', () => {

  beforeEachProviders(() => [
    AppComponent,
    Logger
  ]);

  it('AppComponentが存在すること', inject([AppComponent, Logger], (testee: AppComponent) => {
    expect(testee).toBeDefined();
  }));

});