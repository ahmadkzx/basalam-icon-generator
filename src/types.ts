interface InitOptions {
  primaryVariant?: string;
}

interface FormatOptions {
  primaryVariant?: string;
}

interface IconSet {
  icons: string[];
  variant: string;
  basePath: string;
}

interface MappedIconSet {
  [key: string]: string[];
}
