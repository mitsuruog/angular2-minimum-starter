import {
  describe,
  it,
  inject,
  injectAsync,
  expect,
  beforeEach,
  beforeEachProviders,
  TestComponentBuilder
} from 'angular2/testing';

import {Component, View, provide} from 'angular2/core';
import {Http, BaseRequestOptions, Response, ResponseOptions} from 'angular2/http';
import {DOM} from 'angular2/src/platform/dom/dom_adapter';
import {MockBackend, MockConnection} from 'angular2/http/testing';

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