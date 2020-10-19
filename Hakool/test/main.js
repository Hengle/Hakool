(function () {
  'use strict';

  let hostname = window.location.hostname;
  let pre = "";

  if (hostname === "maxmald.github.io")
  {
    pre = "/hakool";
  }

  let path = "/test/apps/";

  let folder = localStorage.getItem("testPath");

  if (folder === null)
  {
    // TODO load default test.

    throw new Error("NO PATH FOUND");
  }

  path += folder + "/appTest";

  requirejs.config({

    baseUrl: "/",

    paths:
    {
      'index': pre + "/lib/hakool",
      'app': pre + path
    }

  });

  define(["require", "app", "index"], function (require, App)
  {
    var application = new App();

    application.start();

    return;
  });
}());