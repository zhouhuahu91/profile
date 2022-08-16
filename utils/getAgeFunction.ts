const getAge = (birthday: string): number => {
  const today: Date = new Date();
  const birthDate: Date = new Date(birthday);
  let age: number = today.getFullYear() - birthDate.getFullYear();
  const m: number = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

export default getAge;
