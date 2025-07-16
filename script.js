// Smoothie class
class Smoothie {
  constructor(size, ingredients, sweetener) {
    this.size = size;
    this.ingredients = ingredients;
    this.sweetener = sweetener;
  }
// price for the sizes
  getPrice() {
    const basePrices = { Small: 3, Medium: 5, Large: 7 };
    return basePrices[this.size] + this.ingredients.length;
  }

  describe() {
    return `
      <h2>Your Smoothie</h2>
      <p><strong>Size:</strong> ${this.size}</p>
      <p><strong>Ingredients:</strong> ${this.ingredients.join(', ') || 'None'}</p>
      <p><strong>Sweetener:</strong> ${this.sweetener}</p>
      <p><strong>Total Price:</strong> $${this.getPrice().toFixed(2)}</p>
      <img src="smoothie.png" alt="Smoothie Image" width="150"/>
    `;
  }
}

// Handle form submission
document.getElementById('smoothieForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const size = document.getElementById('size').value;
  const sweetener = document.getElementById('sweetener').value;

  const ingredients = [];
  document.querySelectorAll('input[type="checkbox"]:checked').forEach(cb => {
    ingredients.push(cb.value);
  });

  const smoothie = new Smoothie(size, ingredients, sweetener);
document.getElementById('output').innerHTML = smoothie.describe();
});
