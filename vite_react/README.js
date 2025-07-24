// **rem** px
// 0.125rem 2px
// 0.25rem 4px
// 0.375rem 6px
// 0.5rem 8px
// 0.625rem 10px
// 0.75rem 12px
// 0.875rem 14px
// 1rem 16px
// 1.25rem 20px
// 1.5rem 24px
// 1.75rem 28px
// 2rem 32px
// 2.5rem 40px
// 3rem 48px
// 3.5rem 56px
// 4rem 64px
// 5rem 80px
// 6rem 96px

const fetchRecipeById = (id) => {
  fetch(`https://dummyjson.com/recipes/${id}`)
    .then((res) => res.json())
    .then((data) => setRecipe(data))
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      setLoading(false);
    });
};

const fetchRecipeById = async (id) => {
  setLoading(true);
  try {
    const response = await fetch(`https://dummyjson.com/recipes/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "test",
        ingredients: ["test", "test"],
        image: "test",
      }),
    });

    const data = await response.json();
    setRecipe(data);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};

const fetchRecipeById = async (id) => {
  setLoading(true);
  try {
    const response = await axios.get(`https://dummyjson.com/recipes/${id}`);
    setRecipe(response.data);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};
