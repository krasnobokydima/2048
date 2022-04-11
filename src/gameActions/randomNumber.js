export const randomNumber = (ceils) => {
  const allCeilsWithZero = []

  for (let i = 0; i < ceils.length; i++) {
    if (ceils[i].value === 0) {
      allCeilsWithZero.push(i)
    }
  }

  const randomNumber = allCeilsWithZero[~~(Math.random() * (allCeilsWithZero.length))]
  ceils[randomNumber].value = [2, 2, 4][~~(Math.random() * 3)];

  return ceils
}
