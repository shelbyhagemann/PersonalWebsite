function main()
{
  const postValue = pyth(3, 4)
  window.alert("The hypotenuse of a triangle with one leg of 3 and one of 4 is " + postValue)
}
function pyth(x, y)
{
  const addedVals = x*x + y*y
  const post = Math.sqrt(addedVals)
  return post
  window.alert("The hypotenuse of a triangle with one leg of 5 and one of 4 is " + post)
}
main()
