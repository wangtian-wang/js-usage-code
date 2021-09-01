/**动态的加载page下面的所有的路由文件 */
const files = require.context('/@pages', true, /router\.js$/);
const routes = files.keys().map(key => {
    const pages = require('@/pages' + key.replace('.', ''));
    return pages.default
})