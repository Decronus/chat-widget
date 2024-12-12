# Chat Widget

## Установка

Добавить в имеющийся проект или шаблонный тестовый index.html следующий код:

1. Перед закрывающим тегом `</body>`:

```bash
<script>
    window.appConfig = {
        csrf: '',
        currency: 'USD',
        token: 'e4s0uegkzk4vzk05dz3xnck861gjp3rz3y2i8iqk1kyk16it5u4z9c2e92daeb0yn84wprvsdyib4os4ubfyloctesn35387vif75mayz80wmh6u8jihlf7goikka1j2',
        email: '',
        cdnPublicKey: '',
        cdnSignature: '',
        cdnExpiry: '',
    };
</script>
<script src="https://cdn.jsdelivr.net/gh/Decronus/chat-widget@main/dist/widget.bundle.js"></script>
```

2. В тег `<head>`:

```bash
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Decronus/chat-widget@main/styles/widget.css">
```

3. Виджет готов к использованию и появится в правом нижнем углу страницы.
