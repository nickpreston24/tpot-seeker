### Orginal Chrome React Extension
https://github.com/pixochi/create-react-chrome-extension-ts

___Note, there may be others, but I like this one b/c it injects the app into pre-existing html___

### Todos (Rebuilding the app)

- [ ] Import `cross-env` and update package.json to set inline environment vars.
- [ ] Attempt a pack [crx installer](http://www.dre.vanderbilt.edu/~schmidt/android/android-4.0/external/chromium/chrome/common/extensions/docs/packaging.html) [packing an extension from unpacked location](https://www.addictivetips.com/web/how-to-export-an-installed-extension-chrome/)
- [ ]
- [ ] 
- [ ] Add Chakra-UI
- [ ] Create custom TPOT Card.tsx with #600 red color borders
- [ ] 
- [ ] 
- [ ] 

### Links
- [Extract existing Chrome Extensions to .crx files](http://crxextractor.com/)
https://stackoverflow.com/questions/23055651/disable-developer-mode-extensions-pop-up-in-chrome/38011386#38011386
https://smartbear-cc.force.com/portal/KbArticleViewer?name=How-do-I-whitelist-an-extension-in-Chrome-if-Chrome-Web-Store-is-blocked-in-our-company&sp=testcomplete

- There's another option (at least on Mac) -- there's Google's own Chrome Apps & Extensions Developer Tool (https://chrome.google.com/webstore/detail/chrome-apps-extensions-de/ohmmkhmmmpcnpikjeljgnaoabkaalbgc/details) which allows you to re-enable any extension installed.  [UPDATE: this worked like a charm!  Somehow...]

#### Most Helpful Links
- [How to edit permissions in gpedit so you can Pack extensions](https://stackoverflow.com/questions/23055651/disable-developer-mode-extensions-pop-up-in-chrome/38011386#38011386)
[Enable GPEdit.msc](https://www.itechtics.com/enable-gpedit-windows-10-home/)

- There's a proper way to enable Chrome group policy in Windows 10 Home.  To do this, just download the Chrome Policy templates, extract, then copy the .admx and .adml files, both the `chrome` and `google` variants, from their respective `en-US` folders and paste them into `C:\Windows\PolicyDefinitions\` and `C:\Windows\PolicyDefinitions\en-US\` respectively.