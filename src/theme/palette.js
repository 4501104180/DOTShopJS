const SECONDARY = {
    main: '#e255fa',
    light: '#84A9FF',
    dark: '#FE4CF6',
    contrastText: '#fff'
};

const ERROR = {
    main: '#FB3333',
    light: '#FFA48D',
    dark: '#FF4842',
    contrastText: '#fff'
};

const COMMON = {
    secondary: { ...SECONDARY },
    error: { ...ERROR }
};

const palette = {
    light: {
        ...COMMON,
        background: { paper: '#fff', default: '#f5f8fa' }
    },
    dark: {
        ...COMMON,
        background: { paper: '#242424', default: '#312e2e' }
    }
};

export default palette;
