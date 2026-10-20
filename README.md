# Navychem

Sitio estático de Navychem S.A., desarrollado como proyecto independiente a partir del lenguaje visual de MM2.

## Desarrollo local

```bash
python3 -m http.server 8787
```

Abrir `http://localhost:8787`.

## Contenido y recursos

- Logo proporcionado por el cliente: `Logo corporativo NAVYCHEM.png`.
- Barcos recortados y fondo marítimo generados para este sitio en `assets/`.
- Teléfono, ubicación y enlace al formulario tomados del [sitio actual de Navychem](https://navychemsa.com/).
- La organización de categorías toma como referencia el [sitio de Unimarine Group](https://unimarinegroup.com/). Los textos son originales y no incluyen cifras, certificaciones ni marcas de esa empresa.

El formulario de contacto envía los campos `nombre`, `correoe`, `pais`, `asunto` y `mensaje` al mismo procesador que utiliza el sitio vigente de Navychem. La confirmación se abre en otra pestaña. No se publica un correo ni un WhatsApp porque el sitio actual no los informa.

El selector de idioma ofrece español, inglés y griego y recuerda la última opción elegida en el navegador.
