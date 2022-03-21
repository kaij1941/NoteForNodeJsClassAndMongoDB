# npm 版控
## `不會 `版控`node_modules`
只會利用 npm install 指令去根據 package.json安裝

## --save 功用
node應用程式上線會用到的npm

## --save-dev功用
node應用程式 開發過程 會用到的npm
ex:
 *mocha
 *jshint
## -g 全域
會安裝在 `系統底層` 而 `不是安裝在專案中`
windows : C:\user[使用者名稱]\AppData\Roming\npm\node_meodules
Mac     : /usr/local/lib/node_modules
`因為不會寫入package,有可能造成版控問題`

## npm list ：顯示安裝的 NPM 列表

## npm uninstall [模組名稱] ：刪除專案裡的 NPM