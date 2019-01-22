'use babel';

import basicProvider from './basic-provider';

export default {
    getProvider() {
        // return a single provider, or an array of providers to use together
        return [basicProvider];
    }
};
