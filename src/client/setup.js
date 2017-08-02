import { setupState } from './state/setup-state.js';
import { setupData } from './data/setup-data.js';

export const setup = function(){
    setupState();
    setupData();
}