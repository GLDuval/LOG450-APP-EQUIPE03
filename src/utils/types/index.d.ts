// `stores` layer
interface IStore {
  hydrate?: () => PVoid;
}

type StoreDefaultKeys = 'set' | 'setMany' | 'hydrate';
type StoreKeysOf<S> = keyof Omit<S, StoreDefaultKeys>;

// `services` layer
interface IService {
  init: () => void;
}

// System
type PVoid = Promise<void>;
type AnyObj = Record<string, unknown>;
type PureFunc = () => void;
type PureFuncAsync = () => PVoid;
type PureFuncArg<T> = (value?: T) => void;

// Design system
type ThemeColors = {
  textColor: string;
  bgColor: string;
  bg2Color: string;
  text: string;
  text2: string;
  blueberry: string;
  mustard: string;
  orange: string;
  orange2: string;
  lighterOrange: string;
  purple: string;
  lightPurple: string;
  lightOrange: string;
  blue: string;
  groceryGrey: string;
  grey: string;
  red: string;
  details: string;
};
