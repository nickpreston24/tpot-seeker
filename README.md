### Installation

1. Download the .Zip file from the little green box.  Extract to any place you wish to load extensions from your computer.
2. Open Chrome.  Navigate to `chrome://extensions`.  Make sure you have `Developer Mode` ON.
3. Click on the `Load Unpacked Extension` button and follow the prompt.  You should be able to load the same folder you've just extracted.
4. Navigate to any page on TPOT and observe the results.


### Orginal Chrome React Extension
https://github.com/pixochi/create-react-chrome-extension-ts

___Note, there may be others, but I like this one b/c it injects the app into pre-existing html___

### Todos (Rebuilding the app)

- [x] Import `cross-env` and update package.json to set inline environment vars.
- [x] Attempt a pack [crx installer](http://www.dre.vanderbilt.edu/~schmidt/android/android-4.0/external/chromium/chrome/common/extensions/docs/packaging.html) [packing an extension from unpacked location](https://www.addictivetips.com/web/how-to-export-an-installed-extension-chrome/)
- [x] Add a sample WordCloud
- [x] Read any current page's html
- [ ] Make it so words like "didn't" or "don't" are countable and then exclude them as articles.
- [ ] Make a small configuration icon (gear) and popover for configuring what words to exclude. Save to localStorage.  
- [ ] Support exports and imports of localstorage.
- [ ] Parse current page's html and weight repeated words.
- [ ] Add Chakra-UI
- [ ] Create custom TPOT Card.tsx with #600 red color borders

### Links
- [Extract existing Chrome Extensions to .crx files](http://crxextractor.com/)
https://stackoverflow.com/questions/23055651/disable-developer-mode-extensions-pop-up-in-chrome/38011386#38011386
https://smartbear-cc.force.com/portal/KbArticleViewer?name=How-do-I-whitelist-an-extension-in-Chrome-if-Chrome-Web-Store-is-blocked-in-our-company&sp=testcomplete

- There's another option (at least on Mac) -- there's Google's own Chrome Apps & Extensions Developer Tool (https://chrome.google.com/webstore/detail/chrome-apps-extensions-de/ohmmkhmmmpcnpikjeljgnaoabkaalbgc/details) which allows you to re-enable any extension installed.  [UPDATE: this worked like a charm!  Somehow...]

#### Most Helpful Links
- [How to edit permissions in gpedit so you can Pack extensions](https://stackoverflow.com/questions/23055651/disable-developer-mode-extensions-pop-up-in-chrome/38011386#38011386)
[Enable GPEdit.msc](https://www.itechtics.com/enable-gpedit-windows-10-home/)

- There's a proper way to enable Chrome group policy in Windows 10 Home.  To do this, just download the Chrome Policy templates, extract, then copy the .admx and .adml files, both the `chrome` and `google` variants, from their respective `en-US` folders and paste them into `C:\Windows\PolicyDefinitions\` and `C:\Windows\PolicyDefinitions\en-US\` respectively.

### Possibly helpful links
https://www.ibenic.com/react-render-content-wp-rest-api/