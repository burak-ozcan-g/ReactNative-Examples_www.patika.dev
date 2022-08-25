export default function (errorCode) {
  switch (errorCode) {
    case 'auth/invalid-email':
      return 'Geçersiz e-posta!';

    case 'auth/email-already-exists':
      return 'Varolan e-posta!';

    case 'auth/user-not-found':
      return 'Kullanıcı bulunamadı!';

    case 'auth/weak-password':
      return 'Zayıf şifre!!!';

    case 'auth/wrong-password':
      return 'Yanlış şifre!!!';


    default:
      return errorCode;
  }
}