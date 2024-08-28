const test = require('ava');
const rimraf = require('rimraf').rimraf;

const util = {
    cleanBuild: (folder) => {
        const clean = () => rimraf(folder);
        test.beforeEach(clean);
        test.afterEach.always(clean);
    },

    promiseCb: (cb) => {
        return new Promise((resolve, reject) => {
            cb((err, ...data) => {
                if (err) reject(err);
                resolve(...data);
            });
        });
    }
};

module.exports = util;
