import { animate, state, style, transition, trigger } from '@angular/animations';

export enum SmallToBigState {
  INITIAL =  'INITIAL',
  OPEN =  'OPEN',
}

export class OpenningStateProperties {
  width: number;
  minHeight: number;
  top: number;
  left: number;
}

let initialState: OpenningStateProperties = {
  width: 0,
  minHeight: 0,
  top: 0,
  left: 0,
};

export function setInitialState(stateProperties: OpenningStateProperties) {
  initialState = { ...stateProperties };
}

export function getInitialState(): OpenningStateProperties {
  return { ...initialState };
}

const styleSmall = style({ width: '{{width}}px',  minHeight: '{{minHeight}}px',  top: '{{top}}px',  left: '{{left}}px' });
const styleBig = style({ width: '100%', height: '100%', minHeight: '600px', top: '0', left: '0', borderColor: 'transparent' });

export const smallToBig = trigger('smallToBig', [
  state(SmallToBigState.INITIAL, styleSmall, {params: initialState}),

  state(SmallToBigState.OPEN, styleBig),

  transition(`${SmallToBigState.INITIAL} => ${SmallToBigState.OPEN}`, [
    animate(1000)
  ]),
  transition(`${SmallToBigState.INITIAL} <=> ${SmallToBigState.OPEN}`, [
    animate(1000)
  ]),
]);
