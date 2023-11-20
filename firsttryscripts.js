document.getElementById('queueForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Предотвращаем отправку формы по умолчанию

  // Получаем имя пользователя из поля ввода
  const name = document.getElementById('nameInput').value;

  // Это место, где вы можете добавить логику отправки данных на сервер или сохранения в базе данных
  // Например, вы можете использовать Fetch API для отправки данных на сервер

  // В данном примере просто выводим сообщение об успешном занятии места
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `Вы успешно заняли место. Добро пожаловать, ${name}!`;
  resultDiv.style.color = 'green';
});
