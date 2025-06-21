import {Dimensions} from 'react-native';

export const theme = {
  colors: {
    // primary theme color
    themeColor: '#0056D2',
    buttonColor: '#303188',
    grayPrimaryColor: '#64748B',
    placeHolderColor:'#94A3B8',
    borderLightColor: '#E2E8F0',
    primaryRedColor:'#EF4444',
    ExtraTailWindColor:'#3B82F6',
    ExtraTailDarkColor:'#EFF6FF',
    PrimarySlateColor:'#F1F5F9',
    ExtraTailwindGreenColor:'#F0FDF4',
    backgroundShade:'#E9E9F7',

    primary: '#FFFFFF',
    white: '#FFFFFF',
    black: '#000000',
    lightBlack: '#333333',
    extraLightBlack: '#666666',

    //secondary
    secondary1: '#28A745',
    secondary3: '#FFCE20',

    redColor: '#EE5D50',
    // text colors
    neutra: '#0D160B',
    themeText: '#0056D2',
    primaryTextColor: '#0E0F29',
    secondaryTextColor: '#020617',

    greyTextColor: '#838392',
    greyTextColor2: '#6D6E7A',
    greyTextColor3: '#323232',
    greyTextColor4: '#D8D8D8',
    greyTextColor5: '#979797',

    inActiveColor: '#B8B8D2',

    // background color
    background2: '#F2F2F2',
    background3: '#EEEEEE',
    background4: '#D9D9D9',
    background5: '#ebebeb',
    background6: '#c7c7c7',

    // border color
    border: '#E1E1E1',
    primaryBorderColor: '#E2E8F0',
    borderSlateColor: '#CBD5E1',


    //
    background: '#F9FBFC',
    statusbarColor: 'rgba(0,0,0,0.2)',

    success: '#0aad24',

    paid: '#23CC15',
    activeColor:'#22C55E',
    submit: '#23B265',
    unpaid: '#F16063',

    // box background
    boxBg1: '#EAF0FF',
    boxBg2: '#F8F8F8',
    boxBg3: '#FDF3F2',
    boxBgSuccess: '#E8F8F2',
    boxBgWarning: '#FFF8E5',
    boxBgError: '#FFECEC',
    boxBgNeutral: '#F2F2F2',
    //
    // border color

    // options
    selectedOptionbg: '#E9E9F7',
    correctOptionbg: '#F0FDF4',
    // incorrectOptionbg: '#FDF3F2',

    syllabusBg1: '#e2f6ca',
    syllabusBg2: '#f5faf3',
    syllabusBg3: '#d2e8c9',
    syllabusBg4: '#f0f7ed',
    alertRed: '#FE6363',

    // TabBar specific colors
    tabBarBackground: '#f0f0f5',
    tabBarItemSelectedBackground: '#f0f0ff',
    tabBarItemSelectedBorder: '#e0e0ff',
  },
  fontSize: {
    xxlarge: 24,
    large: 22,
    large1: 20,
    largeHeader: 18,
    header: 16,
    button: 15,
    base: 14,
    medium: 13,
    small: 12,
    smallMediumSize: 11,
    smaller: 10,
    smallest: 9,
    tiny: 8,
  },
  fontWeight: {
    light: 300,
    small: 400,
    medium: 500,
    large: 600,
    extra: 700,
  },

  fonts: {
    Thin: 'Poppins-Thin',
    Light: 'Poppins-Light',
    ExtraLight: 'Poppins-ExtraLight',
    Regular: 'Poppins-Regular',
    Medium: 'Poppins-Medium',
    Bold: 'Poppins-Bold',
    SemiBold: 'Poppins-SemiBold',
    ExtraBold: 'Poppins-ExtraBold',

    Inter_Bold: 'Inter-Bold',
    Inter_ExtraBold: 'Inter-ExtraBold',
    Inter_ExtraLight: 'Inter-ExtraLight',
    Inter_Light: 'Inter-Light',
    Inter_Medium: 'Inter-Medium',
    Inter_Regular: 'Inter-Regular',
    Inter_Semibold: 'Inter-SemiBold',
    Inter_Thin: 'Inter-Thin',

    Noto_Light: 'NotoSans-Light',
    Noto_Medium: 'NotoSans-Medium',
    Noto_Semibold: 'NotoSans-Semibold',
    Noto_Thin: 'NotoSans-Thin',
    Noto_Regular: 'NotoSans-Regular',
    Noto_ExtraBold: 'NotoSans-ExtraBold',
    NotoExtraLight: 'NotoSans-ExtraLight',
    Noto_Bold: 'NotoSans-Bold',
    Noto_Black: 'NotoSans-Black',
  },
  WIDTH: Dimensions.get('window').width,
  HEIGHT: Dimensions.get('window').height,
};
