function hitungAkar() {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const c = parseFloat(document.getElementById("c").value);

    const discriminant = b * b - 4 * a * c;

    if (discriminant > 0) {
      const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      document.getElementById("x1").textContent = x1;
      document.getElementById("x2").textContent = x2;
    } else if (discriminant === 0) {
      const x1 = -b / (2 * a);
      document.getElementById("x1").textContent = x1;
      document.getElementById("x2").textContent = "Tidak ada akar kedua (X2)";
    } else {
      document.getElementById("x1").textContent = "Tidak ada akar real (X1)";
      document.getElementById("x2").textContent = "Tidak ada akar real (X2)";
    }
  }