window.PROTOTYPE_DATA = {
  title: "Tappoo Auth Flow Prototype",
  description: "Interactive demo generated from stable-mockup.pen",
  start: "whTJV",
  screens: [
    { id: "whTJV", name: "00 Splash - First Launch" },
    { id: "tS0cO", name: "00 Splash - Loader 30%" },
    { id: "1aseQ", name: "00 Splash - Loader 65%" },
    { id: "xI3QO", name: "00 Splash - Loader 100%" },
    { id: "X4bsT", name: "10 Splash Screen" },
    { id: "0mIf0", name: "01 Login / Signup" },
    { id: "Ze5Lo", name: "11 Create Account - Personal Information" },
    { id: "lEaRB", name: "12 Create Account - Contact Information" },
    { id: "AFkj1", name: "13 Registration Pending" },
    { id: "M79UC", name: "12 Sign In Revamped" },
    { id: "KkPel", name: "13 OTP Verification" },
    { id: "je5FZ", name: "14 Resend OTP State" },
    { id: "J7wHk", name: "15 Incorrect OTP" },
    { id: "o1RjY", name: "16 OTP Success" },
    { id: "V0UL5", name: "17 Biometric Setup" },
    { id: "qNdWT", name: "18 PIN Setup" },
    { id: "mk7VV", name: "19 Confirm PIN" },
    { id: "B597l", name: "20 PIN Error" },
    { id: "tyjr1", name: "21 Setup Complete" },
    { id: "CQDz9", name: "22 Returning Login" },
    { id: "4zZiN", name: "23 PIN Login" },
    { id: "tQT65", name: "24 Biometric Login" },
    { id: "RYcPC", name: "25 Login Error" }
  ],
  transitions: {
    whTJV: [
      { to: "tS0cO", label: "Continue" }
    ],
    tS0cO: [
      { to: "1aseQ", label: "Loader 65%" }
    ],
    "1aseQ": [
      { to: "xI3QO", label: "Loader 100%" }
    ],
    xI3QO: [
      { to: "0mIf0", label: "Open App" }
    ],
    X4bsT: [
      { to: "0mIf0", label: "Get Started" }
    ],
    "0mIf0": [
      { to: "M79UC", label: "Sign In" },
      { to: "Ze5Lo", label: "Sign Up" },
      { to: "CQDz9", label: "Returning User" }
    ],
    Ze5Lo: [
      { to: "lEaRB", label: "Next" }
    ],
    lEaRB: [
      { to: "AFkj1", label: "Submit" }
    ],
    AFkj1: [
      { to: "KkPel", label: "Verify OTP" }
    ],
    M79UC: [
      { to: "KkPel", label: "Send OTP" }
    ],
    KkPel: [
      { to: "o1RjY", label: "Correct OTP" },
      { to: "J7wHk", label: "Wrong OTP" },
      { to: "je5FZ", label: "Resend OTP" }
    ],
    je5FZ: [
      { to: "KkPel", label: "Re-enter OTP" }
    ],
    J7wHk: [
      { to: "KkPel", label: "Try Again" }
    ],
    o1RjY: [
      { to: "V0UL5", label: "Continue" }
    ],
    V0UL5: [
      { to: "tQT65", label: "Enable Biometrics" },
      { to: "qNdWT", label: "Set PIN Instead" }
    ],
    qNdWT: [
      { to: "mk7VV", label: "Create PIN" }
    ],
    mk7VV: [
      { to: "tyjr1", label: "PIN Confirmed" },
      { to: "B597l", label: "PIN Mismatch" }
    ],
    B597l: [
      { to: "qNdWT", label: "Retry Setup" }
    ],
    tyjr1: [
      { to: "CQDz9", label: "Go To Login" }
    ],
    CQDz9: [
      { to: "tQT65", label: "Login with Biometrics" },
      { to: "4zZiN", label: "Login with PIN" }
    ],
    "4zZiN": [
      { to: "RYcPC", label: "Wrong PIN" },
      { to: "CQDz9", label: "Back" }
    ],
    tQT65: [
      { to: "CQDz9", label: "Use PIN Instead" }
    ],
    RYcPC: [
      { to: "CQDz9", label: "Try Again" }
    ]
  }
};
