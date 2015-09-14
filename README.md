ti-soap
=======

[![Dependencies](https://david-dm.org/smclab/ti-soap/status.svg?style=flat-square)](https://david-dm.org/smclab/ti-soap#info=dependencies)
[![Dev Dependencies](https://david-dm.org/smclab/ti-soap/dev-status.svg?style=flat-square)](https://david-dm.org/smclab/ti-soap#info=devDependencies)
[![Available on NPM](https://img.shields.io/npm/v/ti-soap.svg?style=flat-square)](https://www.npmjs.org/package/ti-soap)
[![Available on gitTio](https://img.shields.io/badge/available_on-gitTio-00B4CC.svg?style=flat-square)](http://gitt.io/component/soap)

SOAP client for Titanium SDK

This is a [titaniumified][ti] version of [node-soap][ns], built using [`grunt-titaniumifier`][gti].

[ti]: https://github.com/smclab/titaniumifier
[gti]: https://github.com/smclab/grunt-titaniumifier


### Installation

With **gitTio** for  **Titanium SDK** you can easily install it with

    $ gittio install soap

To download the module for [manual install][mi] (e.g. through *Appcelerator Studio*) then head over the [releases page][rp] to download the latest packaged module.

If you are instead
- porting with [*titaniumifier*][ti] a Node.js module to Titanium, and it uses *soap*;
- or building CommonJS module using *titaniumifier* and you want to have a reliable, stable, tested HTTPClient;

then you can install this module with

    $ npm install --save soap ti-soap

In your `package.json` add

```js
{
  "name": "...",
  "version": "...",
  // ...
  "titanium": {
    "soap": "ti-soap"
  }
}
```

This will tell *titaniumifier* that when your code requires `soap`, `ti-soap` is served instead.

You can use [this *package.json* from one of our modules][lrc-pkg] as a reference.

[mi]: http://docs.appcelerator.com/titanium/latest/#!/guide/Using_a_Module
[rp]: https://github.com/smclab/ti-soap/releases
[lrc-pkg]: https://github.com/smclab/liferay-connector/tree/master/package.json

### Alloy Sync Adapter

[@HazemKhaled](https://github.com/hazemkhaled) created [an Alloy Sync Adapter][asa] that uses this module. If you‘re using Alloy it’s a good idea to [have a look there][asa].

[asa]: https://github.com/HazemKhaled/co.thecodelab.adapter.soap


Credits
-------

Kudos to [@vpulim][vpulim] for building [node-soap][ns] in the first place.

[vpulim]: https://github.com/vpulim
[ns]: https://github.com/vpulim/node-soap

Humbly made by the spry ladies and gents at SMC.


License
-------

This library, *ti-soap*, is free software ("Licensed Software"); you can
redistribute it and/or modify it under the terms of the [GNU Lesser General
Public License](http://www.gnu.org/licenses/lgpl-2.1.html) as published by the
Free Software Foundation; either version 2.1 of the License, or (at your
option) any later version.

This library is distributed in the hope that it will be useful, but WITHOUT ANY
WARRANTY; including but not limited to, the implied warranty of MERCHANTABILITY,
NONINFRINGEMENT, or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General
Public License for more details.

You should have received a copy of the [GNU Lesser General Public
License](http://www.gnu.org/licenses/lgpl-2.1.html) along with this library; if
not, write to the Free Software Foundation, Inc., 51 Franklin Street, Fifth
Floor, Boston, MA 02110-1301 USA
