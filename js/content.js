/**
 * Structured content of all 15 Chapters from the Microsoft Power Platform Guide
 * Includes raw fidelity data + clear pedagogical expansions & practical scenarios
 */

const COURSE_DATA = {
  metadata: {
    title: "Microsoft Power Platform: Guía Práctica",
    subtitle: "Power Apps • Power Automate • SharePoint • Microsoft Lists",
    edition: "Versión de estudio • Octubre de 2026",
    totalModules: 15,
    authoritativeSources: [
      "¿Qué es Power Apps? (Microsoft Learn)",
      "Guía de Canvas Apps (Microsoft Learn)",
      "Introducción a Power Fx",
      "Orígenes de datos en Canvas Apps",
      "Conectores para Canvas Apps",
      "Función Patch",
      "Delegación en Canvas Apps",
      "Formularios en Power Apps",
      "Tipos de flujos en Power Automate",
      "Introducción a los flujos de nube",
      "Crear un flujo de nube sin Copilot",
      "Introducción a flujos de escritorio",
      "Introducción a Microsoft Lists",
      "Crear listas desde la aplicación Lists",
      "Tipos de columnas en listas y bibliotecas",
      "Automatizar una lista",
      "Trabajar con documentos e historial de versiones",
      "Licencias de Power Platform",
      "Conector Excel Online (Business)"
    ]
  },

  modules: [
    {
      id: "mod-1",
      number: 1,
      title: "Mapa Mental de Power Platform",
      category: "Fundamentos",
      description: "Visión global del ecosistema Power Platform: cómo interactúan las aplicaciones, los datos, las automatizaciones y los análisis de negocio sin programar desde cero.",
      objectives: [
        "Comprender la propuesta de valor de Microsoft Power Platform.",
        "Diferenciar los propósitos de Power Apps, Microsoft Lists, SharePoint, Power Automate y Power BI.",
        "Entender que 'low-code' no significa 'sin lógica': uso de fórmulas, expresiones y conectores."
      ],
      goldenRule: "Aprende primero en un entorno de prueba con datos inventados. No edites una aplicación productiva, cambies permisos o actives flujos sin autorización y sin saber cómo regresar a la versión anterior.",
      contentHtml: `
        <div class="content-section">
          <h3 class="section-heading"><span class="heading-num">1.1</span> ¿Qué es Microsoft Power Platform?</h3>
          <p>Microsoft Power Platform es un conjunto integrado de herramientas empresariales que permiten crear soluciones de negocio completas. En vez de programar desde cero todos los componentes (servidores, frontend, lógica de negocio y base de datos), combina aplicaciones, orígenes de datos, flujos de automatización y análisis visuales.</p>
          <p><strong>Aclaración clave:</strong> No significa que todo sea “sin código”. Gran parte de las soluciones profesionales requieren el uso de fórmulas declarativas (Power Fx), condiciones lógicas, expresiones de flujo, conectores personalizados y comunicación con APIs o servicios externos (Azure, SQL, etc.).</p>
          
          <div class="callout callout-golden">
            <div class="callout-icon">⭐</div>
            <div class="callout-body">
              <div class="callout-title">Regla de Oro para Desarrolladores</div>
              <p>Aprende primero en un entorno de prueba con datos ficticios. Nunca edites una aplicación productiva, cambies permisos ni actives flujos sin autorización explícita y sin tener claro el procedimiento de reversión.</p>
            </div>
          </div>

          <h3 class="section-heading"><span class="heading-num">1.2</span> Las Cuatro Herramientas Principales</h3>
          <p>La siguiente matriz sintetiza el rol fundamental de cada herramienta dentro de una arquitectura empresarial:</p>
          
          <div class="table-wrapper">
            <table class="editorial-table">
              <thead>
                <tr>
                  <th>Herramienta</th>
                  <th>Pregunta que responde</th>
                  <th>Ejemplo típico</th>
                  <th>Comparación orientativa</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Power Apps</strong></td>
                  <td>¿Cómo interactúa el usuario con el proceso?</td>
                  <td>Formulario interactivo para registrar una solicitud de compra.</td>
                  <td>Interfaz de una aplicación web moderna.</td>
                </tr>
                <tr>
                  <td><strong>Microsoft Lists</strong></td>
                  <td>¿Cómo organizamos registros sencillos?</td>
                  <td>Tabla de solicitudes con estado, fecha y responsable.</td>
                  <td>Tabla estructurada para un proceso de negocio.</td>
                </tr>
                <tr>
                  <td><strong>SharePoint</strong></td>
                  <td>¿Dónde colaboramos y guardamos archivos y listas?</td>
                  <td>Sitio departamental con documentos, listas y permisos de acceso.</td>
                  <td>Portal de equipo y espacio documental corporativo.</td>
                </tr>
                <tr>
                  <td><strong>Power Automate</strong></td>
                  <td>¿Qué acciones deben ocurrir automáticamente?</td>
                  <td>Enviar una aprobación por correo y actualizar el estado a Aprobado.</td>
                  <td>Motor de flujos y tareas automatizadas en segundo plano.</td>
                </tr>
                <tr>
                  <td><strong>Power BI</strong> <em>(Relacionada)</em></td>
                  <td>¿Qué muestran los datos sobre el negocio?</td>
                  <td>Tableros e indicadores de solicitudes pendientes por mes.</td>
                  <td>Analítica e inteligencia de negocios (no es el foco central de esta guía).</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="callout callout-amplification">
            <div class="callout-icon">💡</div>
            <div class="callout-body">
              <div class="callout-title">Ampliación Pedagógica: ¿Por qué esta combinación es estándar en empresas?</div>
              <p>Las organizaciones que ya cuentan con licencias de Microsoft 365 (E3/E5 o Business Standard) pueden implementar aplicaciones operativas completas utilizando SharePoint y Lists como capa de datos gratuita (conectores estándar), Power Apps como frontend en móviles/web y Power Automate como motor de eventos, reduciendo enormemente los costes de licencias premium de bases de datos relacionales dedicadas para procesos departamentales.</p>
            </div>
          </div>
        </div>
      `,
      keyTakeaways: [
        "Power Apps proporciona la interfaz de usuario.",
        "Microsoft Lists y SharePoint proporcionan la capa de datos estructurados y almacenamiento documental.",
        "Power Automate orquesta la lógica y los eventos automáticos.",
        "Siempre se debe validar en entornos de desarrollo aislados."
      ]
    },

    {
      id: "mod-2",
      number: 2,
      title: "Conceptos Esenciales: Datos, Interfaz, Flujo y Conexión",
      category: "Fundamentos",
      description: "Glosario estructural de datos y arquitectura low-code: cómo viaja la información entre la interfaz, los conectores, los registros y los motores de ejecución.",
      objectives: [
        "Dominar la jerarquía de datos: dato, campo, registro, tabla, documento y vista.",
        "Comprender el ciclo de vida de una petición desde el clic del usuario hasta la notificación.",
        "Identificar la diferencia entre roles de lectura, edición y publicación en distintos entornos."
      ],
      contentHtml: `
        <div class="content-section">
          <h3 class="section-heading"><span class="heading-num">2.1</span> Jerarquía de Datos, Registros, Campos y Documentos</h3>
          <p>Para construir soluciones confiables es indispensable manejar con precisión los términos fundamentales de almacenamiento y organización:</p>
          
          <div class="table-wrapper">
            <table class="editorial-table">
              <thead>
                <tr>
                  <th>Concepto</th>
                  <th>Explicación</th>
                  <th>Ejemplo</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>Dato</strong></td><td>Un valor individual.</td><td><code>"Pendiente"</code></td></tr>
                <tr><td><strong>Campo / Columna</strong></td><td>El tipo de dato que guarda una propiedad.</td><td><code>Estado</code>, <code>FechaSolicitud</code>, <code>Responsable</code></td></tr>
                <tr><td><strong>Registro / Elemento</strong></td><td>Un conjunto de campos que describen un ítem u objeto concreto.</td><td>Solicitud #1042</td></tr>
                <tr><td><strong>Tabla / Lista</strong></td><td>Colección organizada de registros con la misma estructura.</td><td>Lista de solicitudes</td></tr>
                <tr><td><strong>Documento</strong></td><td>Archivo con contenido binario o estructurado.</td><td>Un PDF de factura o una hoja Excel</td></tr>
                <tr><td><strong>Vista</strong></td><td>Una forma guardada y filtrada de presentar los registros.</td><td>"Mis solicitudes pendientes"</td></tr>
                <tr><td><strong>Conector</strong></td><td>Componente que permite a una herramienta comunicarse con un servicio.</td><td>Conector de SharePoint o de Office 365 Outlook</td></tr>
                <tr><td><strong>Flujo</strong></td><td>Secuencia de acciones ordenadas que responde a un disparador.</td><td>Cuando llega una solicitud, notificar al jefe</td></tr>
              </tbody>
            </table>
          </div>

          <h3 class="section-heading"><span class="heading-num">2.2</span> ¿Qué es realmente una solución Low-Code?</h3>
          <p>Low-code significa que gran parte del desarrollo se realiza con diseñadores visuales, controles prediseñados (botones, galerías, selectores) y fórmulas declarativas, en lugar de programar cada capa a mano. <strong>No elimina la responsabilidad técnica</strong> de diseñar buenos modelos de datos, validar permisos de seguridad, manejar excepciones y probar el rendimiento de las consultas.</p>

          <h3 class="section-heading"><span class="heading-num">2.3</span> La Conexión entre Componentes: El Viaje del Dato</h3>
          <div class="step-card">
            <div class="step-number">1</div>
            <div class="step-content">
              <div class="step-title">Usuario interactúa en Power Apps</div>
              <p>Escribe datos en controles, selecciona opciones y activa fórmulas de validación en pantalla.</p>
            </div>
          </div>
          <div class="step-card">
            <div class="step-number">2</div>
            <div class="step-content">
              <div class="step-title">El Conector transmite la orden</div>
              <p>Envía la petición mediante <code>SubmitForm()</code> o <code>Patch()</code> hacia Microsoft Lists o SharePoint.</p>
            </div>
          </div>
          <div class="step-card">
            <div class="step-number">3</div>
            <div class="step-content">
              <div class="step-title">Power Automate detecta el evento</div>
              <p>El trigger <em>"When an item is created"</em> detecta el nuevo registro e inicia las reglas de negocio.</p>
            </div>
          </div>
          <div class="step-card">
            <div class="step-number">4</div>
            <div class="step-content">
              <div class="step-title">Resultado y Notificación</div>
              <p>Se actualiza el registro en la lista, se envía un correo al solicitante y se registra el log de auditoría.</p>
            </div>
          </div>

          <h3 class="section-heading"><span class="heading-num">2.4</span> Entornos, Cuentas y Portales de Acceso</h3>
          <div class="table-wrapper">
            <table class="editorial-table">
              <thead>
                <tr>
                  <th>Herramienta</th>
                  <th>Punto de entrada habitual</th>
                  <th>Para qué lo usarás</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>Power Apps</strong></td><td><code>https://make.powerapps.com</code></td><td>Crear, revisar y administrar aplicaciones; verificar entorno.</td></tr>
                <tr><td><strong>Power Automate</strong></td><td><code>https://make.powerautomate.com</code></td><td>Crear flujos y revisar historiales de ejecución.</td></tr>
                <tr><td><strong>Microsoft Lists</strong></td><td>Iniciador de aplicaciones Microsoft 365</td><td>Crear o configurar listas, columnas y vistas.</td></tr>
                <tr><td><strong>SharePoint</strong></td><td>Enlace del sitio corporativo / M365</td><td>Administrar sitios, bibliotecas y permisos.</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      `,
      keyTakeaways: [
        "Un campo define el tipo, un registro almacena la instancia de un objeto de negocio.",
        "Una vista es solo una lente de visualización, no una copia física de los datos ni un mecanismo de seguridad.",
        "Guardar un cambio en el editor no es lo mismo que publicarlo para los usuarios finales."
      ]
    },

    {
      id: "mod-3",
      number: 3,
      title: "Microsoft Lists desde Cero",
      category: "Datos",
      description: "Diseño de tablas estructuradas, selección correcta de tipos de columnas, creación de vistas personalizadas, reglas automáticas y buenas prácticas de modelado.",
      objectives: [
        "Diseñar una lista de solicitudes con los tipos de columna óptimos.",
        "Diferenciar columnas de texto, opción, persona, fecha, lookup y calculada.",
        "Construir vistas filtradas eficaces ('Pendientes', 'Mis solicitudes').",
        "Evitar errores frecuentes de seguridad confundiendo filtros de vista con permisos."
      ],
      contentHtml: `
        <div class="content-section">
          <h3 class="section-heading"><span class="heading-num">3.1</span> ¿Qué es Microsoft Lists y dónde reside?</h3>
          <p>Microsoft Lists permite organizar información en registros estructurados con columnas. Puede crearse desde cero, a partir de una plantilla prediseñada, desde un archivo Excel/CSV o clonando la estructura de otra lista. Si se crea asociada a un sitio de SharePoint, hereda los permisos y el ciclo de vida de dicho sitio.</p>

          <h3 class="section-heading"><span class="heading-num">3.2</span> Diseño Estructurado: Lista de Solicitudes de Práctica</h3>
          <div class="table-wrapper">
            <table class="editorial-table">
              <thead>
                <tr>
                  <th>Columna</th>
                  <th>Tipo recomendado</th>
                  <th>Justificación del diseño</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><code>Title</code> o <code>Título</code></td><td>Texto corto</td><td>Identificador legible o asunto de la solicitud.</td></tr>
                <tr><td><code>Solicitante</code></td><td>Persona o texto</td><td>Identifica al usuario solicitante usando el directorio de la empresa.</td></tr>
                <tr><td><code>CorreoSolicitante</code></td><td>Texto de una línea</td><td>Correo de contacto para notificaciones automáticas.</td></tr>
                <tr><td><code>FechaSolicitud</code></td><td>Fecha y hora</td><td>Registro temporal exacto de cuándo se emitió el requerimiento.</td></tr>
                <tr><td><code>TipoSolicitud</code></td><td>Opción (Choice)</td><td>Estandariza valores: <em>Permiso, Compra, Acceso, Mantenimiento</em>.</td></tr>
                <tr><td><code>Descripcion</code></td><td>Varias líneas de texto</td><td>Detalle libre del requerimiento.</td></tr>
                <tr><td><code>Estado</code></td><td>Opción (Choice)</td><td>Valores controlados: <em>Pendiente, Aprobada, Rechazada, Cancelada</em>.</td></tr>
                <tr><td><code>Aprobador</code></td><td>Persona</td><td>Responsable asignado a la revisión del requerimiento.</td></tr>
                <tr><td><code>FechaDecision</code></td><td>Fecha y hora</td><td>Momento exacto en que se resolvió la solicitud.</td></tr>
                <tr><td><code>Observaciones</code></td><td>Varias líneas de texto</td><td>Motivo o comentarios del aprobador sobre su decisión.</td></tr>
              </tbody>
            </table>
          </div>

          <div class="callout callout-warning">
            <div class="callout-icon">⚠️</div>
            <div class="callout-body">
              <div class="callout-title">Peligro: El error del 'Texto libre para todo'</div>
              <p>Crear todas las columnas como texto de una línea parece rápido, pero arruina la capacidad de ordenar por fecha real, estandarizar estados para flujos y validar correos electrónicos o personas. Elige el tipo correcto antes de poblar datos.</p>
            </div>
          </div>

          <h3 class="section-heading"><span class="heading-num">3.3</span> Vistas, Filtros y la Falacia de Seguridad</h3>
          <p>Una <strong>Vista</strong> no duplica la base de datos; simplemente filtra y ordena las columnas en pantalla. Ejemplo:</p>
          <ul>
            <li><strong>Vista "Pendientes":</strong> Filtro <code>Estado es igual a Pendiente</code>.</li>
            <li><strong>Vista "Mis solicitudes":</strong> Filtro <code>Solicitante es igual a [Me]</code>.</li>
            <li><strong>Vista "Por prioridad":</strong> Agrupación por categoría y orden cronológico.</li>
          </ul>
          <div class="callout callout-golden">
            <div class="callout-icon">🛡️</div>
            <div class="callout-body">
              <div class="callout-title">Principio de Seguridad Indispensable</div>
              <p>Ocultar columnas o filtrar filas en una vista mejora la usabilidad, pero <strong>NO protege la información</strong>. Cualquier usuario con permiso de lectura puede consultar los datos ocultos mediante vistas personalizadas o llamadas directas a la API de SharePoint.</p>
            </div>
          </div>
        </div>
      `,
      keyTakeaways: [
        "Configura los tipos de columnas adecuadamente desde el primer día.",
        "Las columnas de opción evitan errores ortográficos que romperían las condiciones de Power Automate.",
        "Una vista no es un mecanismo de autorización ni de seguridad."
      ]
    },

    {
      id: "mod-4",
      number: 4,
      title: "SharePoint desde Cero",
      category: "Colaboración",
      description: "Entorno de colaboración, sitios, páginas, listas vs. bibliotecas de documentos, gestión de permisos heredados e inspección segura de sitios empresariales.",
      objectives: [
        "Comprender la arquitectura de sitios y bibliotecas de SharePoint.",
        "Distinguir cuándo usar una lista de registros y cuándo una biblioteca de documentos.",
        "Manejar la jerarquía de permisos (sitio > biblioteca > carpeta > elemento).",
        "Ejecutar una inspección segura en 5 pasos sin romper dependencias."
      ],
      contentHtml: `
        <div class="content-section">
          <h3 class="section-heading"><span class="heading-num">4.1</span> ¿Qué es SharePoint?</h3>
          <p>SharePoint es la plataforma de colaboración y gestión de contenidos en la nube de Microsoft 365. Sirve como el repositorio central para hospedar sitios de equipo, intranets departamentales, bibliotecas de archivos con control de versiones y listas de datos conectadas a Power Platform.</p>

          <h3 class="section-heading"><span class="heading-num">4.2</span> Comparativa: Lista vs. Biblioteca de Documentos</h3>
          <div class="table-wrapper">
            <table class="editorial-table">
              <thead>
                <tr>
                  <th>Aspecto</th>
                  <th>Lista de SharePoint</th>
                  <th>Biblioteca de Documentos</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Propósito Central</strong></td>
                  <td>Registros estructurados con campos individuales.</td>
                  <td>Archivos y carpetas (PDF, DOCX, XLSX, imágenes).</td>
                </tr>
                <tr>
                  <td><strong>Metadatos</strong></td>
                  <td>Cada columna es un dato del registro.</td>
                  <td>Las columnas enriquecen el contexto del archivo adjunto.</td>
                </tr>
                <tr>
                  <td><strong>Uso típico</strong></td>
                  <td>Tickets de soporte, solicitudes, inventario.</td>
                  <td>Contratos firmados, manuales, plantillas corporativas.</td>
                </tr>
                <tr>
                  <td><strong>Interacción con Flujos</strong></td>
                  <td>Triggers como <em>When an item is created / modified</em>.</td>
                  <td>Triggers como <em>When a file is created / properties modified</em>.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 class="section-heading"><span class="heading-num">4.3</span> Permisos y Herencia</h3>
          <p>Los permisos en SharePoint descienden por herencia: <code>Sitio → Biblioteca/Lista → Carpeta → Elemento/Archivo</code>. Romper la herencia para crear permisos únicos por elemento complica el mantenimiento y puede degradar el rendimiento si existen miles de registros.</p>

          <h3 class="section-heading"><span class="heading-num">4.4</span> Protocolo de Inspección Segura de un Sitio</h3>
          <div class="steps-container">
            <div class="step-card">
              <div class="step-number">1</div>
              <div class="step-content">
                <div class="step-title">Verificar permisos y autorización</div>
                <p>Localiza la URL exacta del sitio y confirma con el propietario que tienes permiso de lectura/auditoría.</p>
              </div>
            </div>
            <div class="step-card">
              <div class="step-number">2</div>
              <div class="step-content">
                <div class="step-title">Identificar listas y bibliotecas clave</div>
                <p>Revisa la configuración del sitio para ver qué listas alimentan la app y dónde se guardan los adjuntos.</p>
              </div>
            </div>
            <div class="step-card">
              <div class="step-number">3</div>
              <div class="step-content">
                <div class="step-title">Auditar columnas y versiones sin editar</div>
                <p>Inspecciona los nombres internos de las columnas, tipos de datos y si el historial de versiones está activo.</p>
              </div>
            </div>
            <div class="step-card">
              <div class="step-number">4</div>
              <div class="step-content">
                <div class="step-title">Registrar propietarios y escalamiento</div>
                <p>Anota quiénes son los administradores de la colección de sitios para solicitar accesos si un conector falla.</p>
              </div>
            </div>
            <div class="step-card">
              <div class="step-number">5</div>
              <div class="step-content">
                <div class="step-title">Mapear dependencias antes de proponer cambios</div>
                <p>No cambies nombres de columnas existentes: romperás las fórmulas de Power Apps y los flujos vinculados.</p>
              </div>
            </div>
          </div>
        </div>
      `,
      keyTakeaways: [
        "Una lista almacena datos tabulares; una biblioteca almacena ficheros físicos con metadatos.",
        "Los cambios en columnas existentes en SharePoint impactan inmediatamente a las apps y flujos conectados.",
        "Respeta la herencia de permisos siempre que sea posible."
      ]
    },

    {
      id: "mod-5",
      number: 5,
      title: "Power Apps y el Lenguaje Power Fx",
      category: "Desarrollo de Apps",
      description: "Construcción de interfaces Canvas Apps, orientación en Power Apps Studio, catálogo de controles visuales, sintaxis de fórmulas Power Fx, gestión de variables y colecciones locales.",
      objectives: [
        "Diferenciar Canvas Apps (lienzo libre) de Model-driven Apps (guiadas por Dataverse).",
        "Navegar con fluidez por Tree View, barra de fórmulas, panel de propiedades y panel de datos.",
        "Dominar fórmulas clave: Notify, Navigate, If, Filter, LookUp, Patch y SubmitForm.",
        "Comprender la diferencia entre variables globales (Set), de contexto (UpdateContext) y colecciones (Collect)."
      ],
      contentHtml: `
        <div class="content-section">
          <h3 class="section-heading"><span class="heading-num">5.1</span> Canvas Apps vs. Model-driven Apps</h3>
          <div class="table-wrapper">
            <table class="editorial-table">
              <thead>
                <tr>
                  <th>Aspecto</th>
                  <th>Canvas App (Lienzo)</th>
                  <th>Model-driven App (Basada en Modelos)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>Diseño</strong></td><td>Libertad total pixel a pixel sobre un lienzo en blanco.</td><td>Interfaz prediseñada y uniforme guiada por tablas.</td></tr>
                <tr><td><strong>Capa de datos</strong></td><td>SharePoint, Lists, SQL, Dataverse, Excel, APIs.</td><td>Estrictamente Microsoft Dataverse.</td></tr>
                <tr><td><strong>Uso ideal</strong></td><td>Apps operativas, formularios móviles, tareas de campo.</td><td>Sistemas CRM/ERP complejos con relaciones profundas.</td></tr>
              </tbody>
            </table>
          </div>

          <h3 class="section-heading"><span class="heading-num">5.2</span> Anatomía del Editor (Power Apps Studio)</h3>
          <p>El estudio de desarrollo se compone de 6 zonas fundamentales:</p>
          <ul>
            <li><strong>Árbol de vistas (Tree View):</strong> Jerarquía visual de pantallas, contenedores y controles.</li>
            <li><strong>Lienzo (Canvas):</strong> Área de diseño WYSIWYG de la pantalla activa.</li>
            <li><strong>Barra de fórmulas:</strong> Donde se escribe el código declarativo en Power Fx.</li>
            <li><strong>Panel de propiedades:</strong> Ajustes rápidos de color, tipografía, visibilidad y posición.</li>
            <li><strong>Panel de datos (Data):</strong> Conexiones a SharePoint, Office 365 y conectores.</li>
          </ul>

          <h3 class="section-heading"><span class="heading-num">5.3</span> Fórmulas Esenciales de Power Fx</h3>

          <p><strong>1. Notificación al usuario:</strong></p>
          <pre><code>Notify("Registro guardado con éxito", NotificationType.Success)</code></pre>

          <p><strong>2. Validación condicional de formulario:</strong></p>
          <pre><code>If(
  IsBlank(txtNombre.Text),
  Notify("Por favor escribe el nombre", NotificationType.Error),
  SubmitForm(FormCliente)
)</code></pre>

          <p><strong>3. Filtrado de registros en una galería:</strong></p>
          <pre><code>Filter(Solicitudes, Estado.Value = "Pendiente")</code></pre>

          <p><strong>4. Búsqueda de un registro único:</strong></p>
          <pre><code>LookUp(Clientes, Correo = txtCorreo.Text)</code></pre>

          <p><strong>5. Creación/Modificación avanzada con Patch:</strong></p>
          <pre><code>Patch(
  Solicitudes,
  Defaults(Solicitudes),
  {
    Title: txtAsunto.Text,
    Descripcion: txtDescripcion.Text,
    Estado: { Value: "Pendiente" }
  }
)</code></pre>

          <div class="callout callout-warning">
            <div class="callout-icon">🌐</div>
            <div class="callout-body">
              <div class="callout-title">Cuidado Crítico: Separador regional de argumentos</div>
              <p>En navegadores configurados en español/europeo, Power Apps suele utilizar punto y coma (<code>;</code>) como separador de argumentos y doble punto y coma (<code>;;</code>) para encadenar instrucciones, en lugar de la coma (<code>,</code>). Si ves errores de sintaxis inesperados, verifica los separadores regionales.</p>
            </div>
          </div>

          <h3 class="section-heading"><span class="heading-num">5.4</span> Variables y Colecciones</h3>
          <ul>
            <li><code>Set(varUsuario, User().Email)</code>: Variable global accesible en toda la app.</li>
            <li><code>UpdateContext({ mostrarPanel: true })</code>: Variable local solo válida en la pantalla actual.</li>
            <li><code>ClearCollect(colPendientes, Filter(Solicitudes, Estado.Value = "Pendiente"))</code>: Carga una tabla en memoria local temporal.</li>
          </ul>
          <div class="callout callout-golden">
            <div class="callout-icon">💾</div>
            <div class="callout-body">
              <div class="callout-title">Las colecciones viven solo en la sesión del navegador</div>
              <p>Modificar una fila dentro de una colección local no actualiza la base de datos de SharePoint. Para persistir datos de negocio siempre debes ejecutar <code>Patch()</code> o <code>SubmitForm()</code> hacia el origen de datos real.</p>
            </div>
          </div>
        </div>
      `,
      keyTakeaways: [
        "Power Fx es un lenguaje funcional y declarativo similar a las fórmulas de Excel.",
        "SubmitForm es ideal para formularios estándar; Patch brinda control total campo a campo.",
        "Usa OnSuccess y OnFailure en formularios para capturar el resultado real del servidor."
      ]
    },

    {
      id: "mod-6",
      number: 6,
      title: "Power Automate y los Flujos de Trabajo",
      category: "Automatización",
      description: "Arquitectura de flujos de nube (automatizados, instantáneos, programados), disparadores (triggers), acciones, expresiones lógicas, aprobaciones y control de bucles infinitos.",
      objectives: [
        "Clasificar los diferentes tipos de flujos de trabajo en Power Automate.",
        "Configurar triggers y mapear contenido dinámico en acciones de correo y actualización.",
        "Construir expresiones con utcNow, formatDateTime, coalesce y equals.",
        "Implementar flujos de aprobación y prevenir bucles recursivos con condiciones de trigger."
      ],
      contentHtml: `
        <div class="content-section">
          <h3 class="section-heading"><span class="heading-num">6.1</span> Tipos de Flujos en Power Automate</h3>
          <div class="table-wrapper">
            <table class="editorial-table">
              <thead>
                <tr>
                  <th>Tipo de Flujo</th>
                  <th>Cómo se dispara</th>
                  <th>Ejemplo de caso de uso</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>Automatizado de nube</strong></td><td>Un evento en un servicio conectado.</td><td>Cuando se crea o modifica una solicitud en SharePoint.</td></tr>
                <tr><td><strong>Instantáneo de nube</strong></td><td>Petición manual o botón en Power Apps.</td><td>Pulsar un botón en la app para generar un reporte PDF bajo demanda.</td></tr>
                <tr><td><strong>Programado de nube</strong></td><td>Calendario periódico o frecuencia fija.</td><td>Cada lunes a las 08:00 AM revisar tareas vencidas y notificar.</td></tr>
                <tr><td><strong>Flujo de escritorio (RPA)</strong></td><td>Emulación de clics y teclado en PC local.</td><td>Interactuar con un software contable legacy que no tiene API.</td></tr>
                <tr><td><strong>Flujo en Solución</strong></td><td>Paquete administrado ALM.</td><td>Mover la app y el flujo de Desarrollo a Pruebas y Producción.</td></tr>
              </tbody>
            </table>
          </div>

          <h3 class="section-heading"><span class="heading-num">6.2</span> Anatomía de un Flujo</h3>
          <p>Un flujo se compone secuencialmente de:</p>
          <ul>
            <li><strong>Trigger (Desencadenador):</strong> El evento que arranca la ejecución (ej: <em>When an item is created</em>).</li>
            <li><strong>Acción (Action):</strong> Tarea que interactúa con un servicio (ej: <em>Send an email (V2)</em>, <em>Update item</em>).</li>
            <li><strong>Contenido Dinámico:</strong> Valores extraídos directamente de pasos previos (ej: <code>Title</code>, <code>Solicitante Email</code>).</li>
            <li><strong>Expresiones (Expressions):</strong> Fórmulas que transforman datos cuando el contenido plano no basta.</li>
          </ul>

          <h3 class="section-heading"><span class="heading-num">6.3</span> Expresiones Esenciales</h3>
          <div class="table-wrapper">
            <table class="editorial-table">
              <thead>
                <tr>
                  <th>Necesidad</th>
                  <th>Expresión</th>
                  <th>Resultado</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Valor alternativo si nulo</td><td><code>coalesce(triggerBody()?['Title'], 'Sin título')</code></td><td>Evita errores si un campo viene vacío.</td></tr>
                <tr><td>Fecha y hora actual UTC</td><td><code>utcNow()</code></td><td>Devuelve timestamp estándar ISO.</td></tr>
                <tr><td>Formatear fecha legible</td><td><code>formatDateTime(utcNow(), 'yyyy-MM-dd')</code></td><td>Convierte a formato estándar año-mes-día.</td></tr>
                <tr><td>Comparación booleana</td><td><code>equals(variables('Estado'), 'Aprobada')</code></td><td>Devuelve <code>true</code> o <code>false</code>.</td></tr>
              </tbody>
            </table>
          </div>

          <h3 class="section-heading"><span class="heading-num">6.4</span> Flujos de Aprobación y el Peligro del Bucle Infinito</h3>
          <div class="callout callout-warning">
            <div class="callout-icon">🔄</div>
            <div class="callout-body">
              <div class="callout-title">Peligro Crítico: Bucle Infinito de Modificación</div>
              <p>Si tu trigger es <em>"When an item is created or modified"</em> y dentro de las acciones del flujo ejecutas <em>"Update item"</em> sobre esa misma lista, el flujo se volverá a disparar a sí mismo indefinidamente, consumiendo miles de ejecuciones de tu cuota de licencia en minutos.</p>
              <p><strong>Solución:</strong> Configura <em>Trigger Conditions</em> en los ajustes del desencadenador o usa una columna de bandera para ignorar actualizaciones automáticas.</p>
            </div>
          </div>
        </div>
      `,
      keyTakeaways: [
        "Distingue claramente entre flujos automáticos por evento y flujos instantáneos bajo demanda.",
        "Usa expresiones para manipular fechas y tratar valores nulos.",
        "Siempre implementa filtros de condición de entrada para evitar bucles recursivos."
      ]
    },

    {
      id: "mod-7",
      number: 7,
      title: "Cómo se Integran las Cuatro Herramientas",
      category: "Arquitectura",
      description: "Patrón arquitectónico integral: ciclo de vida de una transacción de negocio y guía de decisiones sobre dónde guardar cada tipo de dato.",
      objectives: [
        "Comprender la arquitectura completa de una solución departamental.",
        "Seguir el ciclo de vida de un evento desde el clic en 'Guardar' hasta la notificación.",
        "Seleccionar el almacenamiento óptimo: Lists, SharePoint, Dataverse o Excel Online."
      ],
      contentHtml: `
        <div class="content-section">
          <h3 class="section-heading"><span class="heading-num">7.1</span> Arquitectura de Solución Integrada</h3>
          <p>En el ecosistema estándar de Microsoft 365, las cuatro herramientas colaboran formando un sistema distribuido robusto:</p>

          <div class="table-wrapper">
            <table class="editorial-table">
              <thead>
                <tr>
                  <th>Capa</th>
                  <th>Herramienta</th>
                  <th>Responsabilidad Técnica</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>Presentación / UI</strong></td><td>Power Apps</td><td>Captura de datos, validaciones de interfaz, formularios y experiencia de usuario.</td></tr>
                <tr><td><strong>Datos Estructurados</strong></td><td>Microsoft Lists</td><td>Almacén de registros tabulares con columnas tipadas y vistas operativas.</td></tr>
                <tr><td><strong>Contenido y Seguridad</strong></td><td>SharePoint</td><td>Repositorio documental, gestión de grupos y control de acceso RBAC.</td></tr>
                <tr><td><strong>Lógica y Eventos</strong></td><td>Power Automate</td><td>Aprobaciones, correos transaccionales, sincronizaciones y manejo de errores.</td></tr>
                <tr><td><strong>Analítica</strong></td><td>Power BI</td><td>Extracción de métricas, reportes ejecutivos e indicadores KPIs.</td></tr>
              </tbody>
            </table>
          </div>

          <h3 class="section-heading"><span class="heading-num">7.2</span> ¿Dónde Conviene Guardar Cada Tipo de Dato?</h3>
          <div class="table-wrapper">
            <table class="editorial-table">
              <thead>
                <tr>
                  <th>Necesidad de Negocio</th>
                  <th>Ubicación recomendada</th>
                  <th>Consideraciones Clave</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Registros sencillos con columnas</td><td><strong>Microsoft Lists / SharePoint</strong></td><td>Excelente para procesos departamentales; rápido y sin costo adicional de licencia.</td></tr>
                <tr><td>Documentos, contratos y plantillas</td><td><strong>Biblioteca SharePoint</strong></td><td>Permite versionado automático, metadatos y búsqueda de texto completo.</td></tr>
                <tr><td>Modelos relacionales complejos empresariales</td><td><strong>Microsoft Dataverse / Azure SQL</strong></td><td>Seguridad por rol a nivel de registro, auditoría avanzada y relaciones 1:N / N:N.</td></tr>
                <tr><td>Archivos Excel con fórmulas históricas</td><td><strong>OneDrive / SharePoint con tabla oficial</strong></td><td>Solo para consumo puntual; no apto como base de datos concurrente multiusuario.</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      `,
      keyTakeaways: [
        "Cada herramienta debe cumplir su propósito sin sobrecargar a las demás.",
        "No uses Excel como sustituto de una base de datos concurrente.",
        "Separa la capa analítica (Power BI) de la capa transaccional operativa."
      ]
    },

    {
      id: "mod-8",
      number: 8,
      title: "Laboratorio Práctico: Gestión de Solicitudes",
      category: "Laboratorios",
      description: "Práctica integral paso a paso: Diseño de lista, creación de Canvas App de 2 pantallas con galería y formulario, flujo de notificación y aprobación con criterios de aceptación.",
      objectives: [
        "Completar la Fase A: Diseñar la lista SolicitudesPractica en SharePoint.",
        "Completar la Fase B: Construir una Canvas App conectada con galería, filtros y formulario SubmitForm.",
        "Completar la Fase C: Crear flujo automatizado de aviso al aprobador.",
        "Completar la Fase D: Añadir acción de aprobación y actualización de estado.",
        "Validar los criterios de aceptación de la Fase E."
      ],
      contentHtml: `
        <div class="content-section">
          <h3 class="section-heading"><span class="heading-num">8.1</span> Guía Paso a Paso del Laboratorio</h3>

          <div class="steps-container">
            <div class="step-card">
              <div class="step-number">A</div>
              <div class="step-content">
                <div class="step-title">Fase A: Diseña la Lista en SharePoint</div>
                <p>1. Crea un sitio de prueba en SharePoint o accede a uno autorizado.<br>
                2. Crea una lista llamada <code>SolicitudesPractica</code>.<br>
                3. Agrega las columnas: <code>Title</code> (Asunto), <code>TipoSolicitud</code> (Opción: Compra, Permiso, Soporte), <code>Descripcion</code> (Texto enriquecido/varias líneas), <code>Estado</code> (Opción: Pendiente, Aprobada, Rechazada con valor predeterminado 'Pendiente'), <code>Solicitante</code> (Persona), <code>Aprobador</code> (Persona) y <code>FechaDecision</code> (Fecha y hora).<br>
                4. Inserta 3 registros de prueba y crea la vista <em>"Pendientes"</em>.</p>
              </div>
            </div>

            <div class="step-card">
              <div class="step-number">B</div>
              <div class="step-content">
                <div class="step-title">Fase B: Construye la Canvas App</div>
                <p>1. En <code>make.powerapps.com</code>, crea una Canvas App en blanco.<br>
                2. Añade el origen de datos conectando a <code>SolicitudesPractica</code>.<br>
                3. Pantalla 1: Agrega una <strong>Gallery</strong> vinculada a la lista y filtra con <code>Filter(SolicitudesPractica, Estado.Value = "Pendiente")</code>.<br>
                4. Pantalla 2: Inserta un <strong>Edit Form</strong> con <code>DataSource = SolicitudesPractica</code>.<br>
                5. Agrega un botón "Guardar" con la fórmula <code>SubmitForm(FormSolicitud)</code>.<br>
                6. En la propiedad <code>OnSuccess</code> del formulario añade <code>Notify("Guardado con éxito", NotificationType.Success);; Navigate(PantallaGaleria)</code>.<br>
                7. En <code>OnFailure</code> añade <code>Notify("Error al guardar: " & First(Errors(SolicitudesPractica)).Message, NotificationType.Error)</code>.</p>
              </div>
            </div>

            <div class="step-card">
              <div class="step-number">C</div>
              <div class="step-content">
                <div class="step-title">Fase C: Flujo de Notificación Automatizado</div>
                <p>1. En <code>make.powerautomate.com</code>, crea un flujo automatizado de nube.<br>
                2. Trigger: <em>When an item is created</em> (apuntando al sitio y lista).<br>
                3. Condición: <code>Estado Value es igual a Pendiente</code>.<br>
                4. Acción: <em>Send an email (V2)</em> al correo del Aprobador incluyendo el asunto y enlace al elemento.</p>
              </div>
            </div>

            <div class="step-card">
              <div class="step-number">D</div>
              <div class="step-content">
                <div class="step-title">Fase D: Aprobación y Actualización de Estado</div>
                <p>1. Inserta la acción <em>Start and wait for an approval</em>.<br>
                2. Evalúa si <code>Outcome</code> es igual a <code>Approve</code>.<br>
                3. Si es Sí: Actualiza el ítem con <code>Estado = Aprobada</code> y <code>FechaDecision = utcNow()</code>.<br>
                4. Si es No: Actualiza con <code>Estado = Rechazada</code> y añade los comentarios.</p>
              </div>
            </div>
          </div>

          <h3 class="section-heading"><span class="heading-num">8.2</span> Fase E: Criterios de Aceptación y Checklist</h3>
          <ul class="action-checklist">
            <li class="checklist-item"><span class="custom-checkbox">✓</span> <span class="checklist-text">El usuario puede consultar en la galería solo los registros permitidos.</span></li>
            <li class="checklist-item"><span class="custom-checkbox">✓</span> <span class="checklist-text">El formulario valida campos obligatorios antes de enviar.</span></li>
            <li class="checklist-item"><span class="custom-checkbox">✓</span> <span class="checklist-text">El flujo no genera correos duplicados ni entra en bucle infinito.</span></li>
            <li class="checklist-item"><span class="custom-checkbox">✓</span> <span class="checklist-text">La aprobación actualiza correctamente el estado a 'Aprobada' o 'Rechazada'.</span></li>
          </ul>
        </div>
      `,
      keyTakeaways: [
        "El laboratorio une la arquitectura de datos, interfaz y automatización en un solo ciclo cerrado.",
        "Maneja siempre OnSuccess y OnFailure para dar retroalimentación clara al usuario.",
        "Valida los 5 criterios de aceptación antes de dar por completada la solución."
      ]
    },

    {
      id: "mod-9",
      number: 9,
      title: "Errores Frecuentes y Cómo Investigarlos",
      category: "Resolución de Problemas",
      description: "Catálogo de síntomas, causas posibles y pasos de revisión para Power Apps, Power Automate, SharePoint y Excel. Método de diagnóstico en 5 pasos.",
      objectives: [
        "Diagnosticar rápidamente problemas comunes de conexión, fórmulas y permisos.",
        "Resolver alertas de delegación en listas con más de 2.000 registros.",
        "Aplicar el método de resolución sistemática en cinco pasos."
      ],
      contentHtml: `
        <div class="content-section">
          <h3 class="section-heading"><span class="heading-num">9.1</span> Tabla de Diagnóstico de Errores Comunes</h3>
          
          <div class="table-wrapper">
            <table class="editorial-table">
              <thead>
                <tr>
                  <th>Síntoma observado</th>
                  <th>Causas posibles</th>
                  <th>Cómo empezar a revisar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>La app abre pero no carga datos</td>
                  <td>Permisos del origen, conexión vencida, entorno equivocado o cambio de nombre de lista.</td>
                  <td>Verifica la conexión en el panel de datos, permisos en SharePoint y mensajes de error en el editor.</td>
                </tr>
                <tr>
                  <td>El botón no hace nada al pulsarlo</td>
                  <td>Propiedad OnSelect vacía, error de sintaxis en fórmula, control en modo Disabled o variable errónea.</td>
                  <td>Selecciona el botón, inspecciona la fórmula OnSelect y prueba en la vista previa (F5).</td>
                </tr>
                <tr>
                  <td>El formulario no guarda cambios</td>
                  <td>Campos obligatorios vacíos, tipos incompatibles, permisos insuficientes o fallo de conector.</td>
                  <td>Inspecciona la propiedad <code>OnFailure</code> y evalúa <code>Errors(OrigenDatos)</code>.</td>
                </tr>
                <tr>
                  <td>Solo aparecen algunos registros (máx 500 / 2000)</td>
                  <td><strong>Límite de delegación:</strong> la fórmula contiene funciones no delegables al origen de datos.</td>
                  <td>Revisa advertencias azules/amarillas en el editor y optimiza los operadores de filtro.</td>
                </tr>
                <tr>
                  <td>El flujo de Automate no inicia</td>
                  <td>Trigger mal configurado, URL/sitio incorrecto, flujo en estado Desactivado (Off) o conector sin autenticar.</td>
                  <td>Verifica que el flujo esté activo ("Turn on") y revisa el Run History.</td>
                </tr>
                <tr>
                  <td>El flujo falla a mitad de ejecución</td>
                  <td>Contenido dinámico nulo (campo vacío), permisos en servicio destino o timeout de API.</td>
                  <td>Abre la ejecución en Run History, localiza el paso en rojo y analiza el JSON de entrada/salida.</td>
                </tr>
                <tr>
                  <td>Se envían correos duplicados</td>
                  <td>Trigger de modificación sin filtro anti-bucle, reglas duplicadas o reintentos automáticos.</td>
                  <td>Revisa los disparadores y añade condiciones de trigger para ignorar cambios del propio flujo.</td>
                </tr>
                <tr>
                  <td>Excel Online no encuentra la fila o tabla</td>
                  <td>Rango no convertido en tabla oficial con nombre, archivo bloqueado o ruta renombrada.</td>
                  <td>Abre Excel y asegúrate de que el rango tenga formato oficial de Tabla (Ctrl+T) con nombre asignado.</td>
                </tr>
                <tr>
                  <td>Un compañero no ve la app ni los datos</td>
                  <td>No se compartió la app, no tiene permisos asignados en la lista de SharePoint o falta licencia.</td>
                  <td>Comparte la app desde el portal y asigna permisos de lectura en el sitio de SharePoint correspondiente.</td>
                </tr>
                <tr>
                  <td>Los cambios guardados no los ven los usuarios</td>
                  <td>Se guardó pero <strong>no se publicó</strong> la nueva versión.</td>
                  <td>Haz clic en el botón de Publicar versión en Power Apps Studio.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 class="section-heading"><span class="heading-num">9.2</span> Método de Diagnóstico en Cinco Pasos</h3>
          <div class="steps-container">
            <div class="step-card">
              <div class="step-number">1</div>
              <div class="step-content">
                <div class="step-title">Reproducir y Registrar</div>
                <p>Reproduce el fallo con datos ficticios. Anota la hora exacta, el rol del usuario y el mensaje de error textual.</p>
              </div>
            </div>
            <div class="step-card">
              <div class="step-number">2</div>
              <div class="step-content">
                <div class="step-title">Aislar la Capa del Fallo</div>
                <p>Identifica si el problema reside en la interfaz (Power Apps), en la transmisión (Conector), en el origen (SharePoint) o en la automatización (Power Automate).</p>
              </div>
            </div>
            <div class="step-card">
              <div class="step-number">3</div>
              <div class="step-content">
                <div class="step-title">Comprobar Conexiones y Permisos antes de reescribir código</div>
                <p>El 70% de los fallos son credenciales vencidas o nombres de columnas alterados, no errores de lógica.</p>
              </div>
            </div>
            <div class="step-card">
              <div class="step-number">4</div>
              <div class="step-content">
                <div class="step-title">Inspeccionar JSON y cambiar UNA sola variable</div>
                <p>Revisa las salidas reales en Run History y realiza un solo cambio a la vez para validar la causa raíz.</p>
              </div>
            </div>
            <div class="step-card">
              <div class="step-number">5</div>
              <div class="step-content">
                <div class="step-title">Validar Caminos de Éxito y Error</div>
                <p>Prueba tanto el flujo exitoso como los casos inválidos. Documenta el cambio y verifica el procedimiento de reversión.</p>
              </div>
            </div>
          </div>
        </div>
      `,
      keyTakeaways: [
        "No reescribas fórmulas complejas antes de verificar permisos y conexiones.",
        "Guarda y publica: guardar no despliega a los usuarios.",
        "El Run History de Power Automate te da el JSON exacto de cada fallo."
      ]
    },

    {
      id: "mod-10",
      number: 10,
      title: "Seguridad, Permisos, Licencias y Buenas Prácticas",
      category: "Gobierno y Seguridad",
      description: "Principio de mínimo privilegio, conectores estándar vs. premium, gestión de entornos (Dev/Test/Prod) y protocolo previo a modificar sistemas existentes.",
      objectives: [
        "Aplicar el principio de mínimo privilegio en listas y aplicaciones.",
        "Comprender la diferencia de costes y capacidades entre conectores estándar y premium.",
        "Establecer la segregación de entornos (Desarrollo, UAT, Producción).",
        "Seguir la lista de verificación antes de tocar una app en producción."
      ],
      contentHtml: `
        <div class="content-section">
          <h3 class="section-heading"><span class="heading-num">10.1</span> Reglas Fundamentales de Seguridad</h3>
          <ul>
            <li><strong>Principio de Mínimo Privilegio:</strong> Otorga únicamente los permisos estrictamente indispensables para la tarea. Si un usuario solo debe registrar solicitudes, no le otorgues permisos de edición en todo el sitio de SharePoint.</li>
            <li><strong>La Interfaz NO es Seguridad:</strong> Ocultar un botón mediante <code>Visible = false</code> no impide que un usuario curioso envíe datos si tiene acceso al conector o a la lista. La seguridad real vive en el origen de datos.</li>
            <li><strong>Cuentas de Servicio vs. Cuentas Personales:</strong> Los flujos corporativos deben pertenecer a cuentas de servicio dedicadas o soluciones compartidas. Si un flujo se ejecuta con la cuenta de un empleado que abandona la empresa, el flujo fallará inmediatamente al desactivar su usuario.</li>
            <li><strong>Protección de Datos e IA:</strong> Nunca copies datos personales, credenciales o secretos corporativos en herramientas externas de IA sin autorización expresa.</li>
          </ul>

          <h3 class="section-heading"><span class="heading-num">10.2</span> Licencias y Conectores Estándar vs. Premium</h3>
          <p>Microsoft 365 incluye el uso de <strong>conectores estándar</strong> (SharePoint, Lists, OneDrive, Outlook, Planner). El uso de conectores <strong>Premium</strong> (Dataverse, SQL Server, HTTP Request, Salesforce, SAP) requiere licencias dedicadas por usuario o por app de Power Apps / Power Automate.</p>

          <h3 class="section-heading"><span class="heading-num">10.3</span> Segregación de Entornos</h3>
          <div class="table-wrapper">
            <table class="editorial-table">
              <thead>
                <tr>
                  <th>Entorno</th>
                  <th>Uso recomendado</th>
                  <th>Qué se debe evitar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Desarrollo (Dev)</strong></td>
                  <td>Creación, experimentación y cambios con datos 100% ficticios.</td>
                  <td>Enviar correos reales a clientes o alterar bases productivas.</td>
                </tr>
                <tr>
                  <td><strong>Pruebas / UAT</strong></td>
                  <td>Validación de negocio con usuarios clave y casos reales controlados.</td>
                  <td>Usar datos personales sin controles ni anonimización.</td>
                </tr>
                <tr>
                  <td><strong>Producción (Prod)</strong></td>
                  <td>Operación diaria oficial de la compañía.</td>
                  <td>Experimentos, modificaciones en caliente o publicaciones sin validar.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `,
      keyTakeaways: [
        "La seguridad siempre reside en el origen de datos, nunca en la visibilidad visual de los botones.",
        "Verifica siempre los requisitos de licencia premium antes de diseñar la arquitectura.",
        "Respeta la separación entre Desarrollo, Pruebas y Producción."
      ]
    },

    {
      id: "mod-11",
      number: 11,
      title: "Ruta de Estudio de Cuatro Semanas",
      category: "Plan de Aprendizaje",
      description: "Cronograma estructurado para dominar Power Platform de manera progresiva, desde la estructura de datos hasta el despliegue y mantenimiento.",
      objectives: [
        "Planificar el aprendizaje progresivo a lo largo de 4 semanas.",
        "Priorizar los conceptos de alta urgencia frente a los temas avanzados.",
        "Obtener resultados prácticos comprobables al final de cada ciclo semanal."
      ],
      contentHtml: `
        <div class="content-section">
          <h3 class="section-heading"><span class="heading-num">11.1</span> Cronograma de Cuatro Semanas</h3>
          
          <div class="table-wrapper">
            <table class="editorial-table">
              <thead>
                <tr>
                  <th>Semana</th>
                  <th>Enfoque Temático</th>
                  <th>Práctica Concreta</th>
                  <th>Resultado Esperado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Semana 1</strong></td>
                  <td>SharePoint y Microsoft Lists</td>
                  <td>Crear listas de prueba, configurar tipos de columnas, vistas filtradas, permisos de grupo e historial de versiones.</td>
                  <td>Dominar la capa de datos estructurados y repositorios documentales.</td>
                </tr>
                <tr>
                  <td><strong>Semana 2</strong></td>
                  <td>Power Apps y Power Fx</td>
                  <td>Crear una Canvas App de dos pantallas conectada a la lista. Galería filtrada, formulario New/Edit y validaciones.</td>
                  <td>Consultar, crear y editar registros; controlar estados con SubmitForm y Patch.</td>
                </tr>
                <tr>
                  <td><strong>Semana 3</strong></td>
                  <td>Power Automate</td>
                  <td>Crear flujos automáticos de aviso por correo, condiciones lógicas, aprobaciones de decisión y Run History.</td>
                  <td>Entender triggers, acciones, contenido dinámico, expresiones y control de fallos.</td>
                </tr>
                <tr>
                  <td><strong>Semana 4</strong></td>
                  <td>Integración y Mantenimiento</td>
                  <td>Completar el laboratorio integral de gestión de solicitudes, revisar permisos, resolver errores y publicar.</td>
                  <td>Explicar el ciclo end-to-end de una solución empresarial y documentar su reversión.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 class="section-heading"><span class="heading-num">11.2</span> ¿Qué estudiar primero y qué dejar para después?</h3>
          <p><strong>Prioridad Alta (Inmediata):</strong> Orígenes de datos, permisos, galerías y formularios en Power Apps, fórmulas básicas de Power Fx (If, Filter, LookUp), triggers/acciones de Automate y Run History.</p>
          <p><strong>Prioridad Media (Consolidación):</strong> Variables globales/locales, Patch, límites de delegación, expresiones avanzadas de fecha/texto, aprobaciones y manejo estructurado de errores con Scope.</p>
          <p><strong>Avanzado (Para más adelante):</strong> Soluciones administradas, ALM/DevOps, conectores personalizados con OpenAPI, Dataverse complejo, APIs de Graph y automatizaciones RPA de escritorio.</p>
        </div>
      `,
      keyTakeaways: [
        "Comienza dominando los datos (Semana 1) antes de intentar crear interfaces complejas.",
        "Dedica la Semana 3 a entender a fondo el Run History de Power Automate.",
        "No saltes a temas avanzados de Dataverse antes de dominar los fundamentos low-code estándar."
      ]
    },

    {
      id: "mod-12",
      number: 12,
      title: "Qué Hacer el Primer Día con la App de tu Empresa",
      category: "Guía Profesional",
      description: "Guía de preguntas clave de orientación, plantilla oficial para documentar una aplicación existente y protocolo seguro antes de modificar código.",
      objectives: [
        "Formular las 10 preguntas críticas al recibir acceso a una aplicación existente.",
        "Completar la plantilla de auditoría técnica y funcional de la solución.",
        "Garantizar la trazabilidad y la posibilidad de revertir cambios ante incidencias."
      ],
      contentHtml: `
        <div class="content-section">
          <h3 class="section-heading"><span class="heading-num">12.1</span> Las 10 Preguntas Clave del Primer Día</h3>
          <p>Cuando te concedan acceso a una aplicación corporativa, responde estas 10 preguntas antes de realizar cualquier cambio en el editor:</p>
          
          <div class="steps-container">
            <div class="step-card"><div class="step-number">1</div><div class="step-content"><div class="step-title">¿Cuál es el objetivo de negocio y quiénes son los usuarios finales?</div></div></div>
            <div class="step-card"><div class="step-number">2</div><div class="step-content"><div class="step-title">¿Qué tarea concreta debo modificar y cómo se medirá el éxito del cambio?</div></div></div>
            <div class="step-card"><div class="step-number">3</div><div class="step-content"><div class="step-title">¿Es una Canvas App, una Model-driven App o un formulario personalizado de SharePoint?</div></div></div>
            <div class="step-card"><div class="step-number">4</div><div class="step-content"><div class="step-title">¿En qué entorno me encuentro: Desarrollo, Pruebas o Producción?</div></div></div>
            <div class="step-card"><div class="step-number">5</div><div class="step-content"><div class="step-title">¿Qué listas, tablas, bibliotecas o archivos alimentan la aplicación?</div></div></div>
            <div class="step-card"><div class="step-number">6</div><div class="step-content"><div class="step-title">¿Qué flujos de Power Automate se ejecutan antes, durante o después de guardar?</div></div></div>
            <div class="step-card"><div class="step-number">7</div><div class="step-content"><div class="step-title">¿Qué cuentas o conexiones son propietarias de los flujos y conectores?</div></div></div>
            <div class="step-card"><div class="step-number">8</div><div class="step-content"><div class="step-title">¿Qué permisos necesito y quién es el administrador responsable de concederlos?</div></div></div>
            <div class="step-card"><div class="step-number">9</div><div class="step-content"><div class="step-title">¿Cómo se prueba la solución, quién aprueba el pase a producción y quién publica?</div></div></div>
            <div class="step-card"><div class="step-number">10</div><div class="step-content"><div class="step-title">¿Cómo se vuelve a la versión anterior (rollback) si algo falla?</div></div></div>
          </div>

          <h3 class="section-heading"><span class="heading-num">12.2</span> Plantilla Oficial para Documentar una App</h3>
          <div class="table-wrapper">
            <table class="editorial-table">
              <thead>
                <tr>
                  <th>Campo</th>
                  <th>Qué se debe registrar</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>Nombre de la App</strong></td><td>Nombre exacto y URL interna (sin exponer públicamente).</td></tr>
                <tr><td><strong>Objetivo de Negocio</strong></td><td>Problema operativo o administrativo que resuelve.</td></tr>
                <tr><td><strong>Usuarios y Roles</strong></td><td>Grupos de seguridad autorizados y nivel de acceso requerido.</td></tr>
                <tr><td><strong>Entorno y Propietario</strong></td><td>Nombre del Environment y responsable técnico de contacto.</td></tr>
                <tr><td><strong>Pantallas Principales</strong></td><td>Inventario de pantallas y su propósito funcional.</td></tr>
                <tr><td><strong>Fuentes de Datos</strong></td><td>Listas de SharePoint, bibliotecas, tablas Dataverse o SQL.</td></tr>
                <tr><td><strong>Flujos Conectados</strong></td><td>Nombre, trigger, propósito y propietario de cada flujo vinculado.</td></tr>
                <tr><td><strong>Puntos Críticos</strong></td><td>Fórmulas complejas, validaciones clave y llamadas Patch.</td></tr>
                <tr><td><strong>Pruebas Necesarias</strong></td><td>Casos de prueba exitosos, casos inválidos y validación de permisos.</td></tr>
                <tr><td><strong>Plan de Reversión</strong></td><td>Número de versión previa y responsable autorizado para restaurar.</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      `,
      keyTakeaways: [
        "Nunca comiences a programar sin tener documentada la versión anterior y el plan de reversión.",
        "Identifica los flujos de fondo vinculados antes de alterar los nombres de campos en la app.",
        "Verifica siempre en qué entorno estás trabajando antes de presionar 'Publicar'."
      ]
    },

    {
      id: "mod-13",
      number: 13,
      title: "Cómo Usar Antigravity o una IA para Aprender",
      category: "Tutoría y Buenas Prácticas",
      description: "Estrategias y prompts efectivos para usar agentes de IA como tutores de Power Platform, respetando la privacidad y la seguridad corporativa.",
      objectives: [
        "Aprender a redactar prompts efectivos con datos ficticios para desglosar fórmulas de Power Fx.",
        "Solicitar asistencia en diseño de flujos y resolución de errores.",
        "Comprender las directrices de privacidad y anonimización de datos corporativos."
      ],
      contentHtml: `
        <div class="content-section">
          <h3 class="section-heading"><span class="heading-num">13.1</span> Peticiones Útiles con Datos Ficticios</h3>
          <p>Para aprovechar al máximo una IA como tutor técnico sin comprometer la seguridad empresarial, utiliza estructuras de consulta precisas:</p>

          <div class="step-card">
            <div class="step-number">1</div>
            <div class="step-content">
              <div class="step-title">Desglose pedagógico de fórmulas complejas:</div>
              <p><em>"Actúa como tutor de Microsoft Power Apps. Explícame esta fórmula Power Fx por partes, qué espera recibir, qué devuelve, en qué propiedad de control se coloca, qué errores puede producir y cómo probarla con datos ficticios."</em></p>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">2</div>
            <div class="step-content">
              <div class="step-title">Diseño de laboratorio de automatización:</div>
              <p><em>"Diseña un laboratorio de Power Automate con SharePoint y Microsoft Lists usando datos ficticios. Incluye el desencadenador, acciones, contenido dinámico, condiciones, manejo de fallos, pruebas y criterios de aceptación. Señala qué partes dependen de licencias premium."</em></p>
            </div>
          </div>

          <div class="step-card">
            <div class="step-number">3</div>
            <div class="step-content">
              <div class="step-title">Documentación estructurada de soluciones:</div>
              <p><em>"Ayúdame a documentar una aplicación Power Apps existente. Organiza pantallas, controles, fórmulas, orígenes de datos, flujos relacionados, permisos y pruebas. Separa los hechos de las suposiciones."</em></p>
            </div>
          </div>

          <div class="callout callout-warning">
            <div class="callout-icon">🔒</div>
            <div class="callout-body">
              <div class="callout-title">Protocolo Estricto de Privacidad</div>
              <p>Antes de consultar a cualquier herramienta de IA, <strong>elimina por completo</strong>: nombres reales de empleados, correos corporativos, identificadores internos de servidores o GUIDs, URLs privadas de SharePoint, documentos confidenciales y contraseñas. Reemplaza siempre con valores ficticios como <em>SolicitudesPractica</em> o <em>usuario@ejemplo.com</em>.</p>
            </div>
          </div>
        </div>
      `,
      keyTakeaways: [
        "Usa la IA como un acelerador de comprensión conceptual y generador de escenarios de prueba.",
        "La IA nunca reemplaza la asignación de permisos reales ni la validación en el tenant corporativo.",
        "Anonimiza siempre el 100% de la información antes de consultar."
      ]
    },

    {
      id: "mod-14",
      number: 14,
      title: "Glosario Rápido de Términos Técnicos",
      category: "Referencia",
      description: "Diccionario técnico integral con los 21 términos esenciales de Power Platform, definiciones prácticas, impacto y relaciones.",
      objectives: [
        "Consultar rápidamente cualquier término técnico del ecosistema.",
        "Entender las relaciones entre conceptos (App, Flow, Connector, Delegation, Scope).",
        "Utilizar el glosario interactivo con búsqueda y filtrado en tiempo real."
      ],
      contentHtml: `
        <div class="content-section">
          <h3 class="section-heading"><span class="heading-num">14.1</span> Glosario Técnico de Términos Clave</h3>
          <p>Explora a continuación las definiciones prácticas de los 21 términos fundamentales del manual. Puedes hacer clic en cualquier término para abrir su ficha completa.</p>
          
          <div class="table-wrapper">
            <table class="editorial-table">
              <thead>
                <tr>
                  <th>Término</th>
                  <th>Significado Práctico</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>App</strong></td><td>Aplicación construida para resolver una tarea o automatizar un proceso empresarial.</td></tr>
                <tr><td><strong>Canvas App</strong></td><td>Aplicación con interfaz visual diseñada libremente sobre un lienzo en blanco.</td></tr>
                <tr><td><strong>Model-driven App</strong></td><td>Aplicación construida principalmente sobre modelos de datos y tablas de Dataverse.</td></tr>
                <tr><td><strong>Power Fx</strong></td><td>Lenguaje de fórmulas declarativas utilizado para la lógica en Power Apps.</td></tr>
                <tr><td><strong>Control</strong></td><td>Elemento de interfaz interactivo (botón, entrada de texto, galería, formulario, selector).</td></tr>
                <tr><td><strong>Propiedad</strong></td><td>Característica configurable de un control (ej: <code>Text</code>, <code>Visible</code>, <code>OnSelect</code>, <code>DisplayMode</code>).</td></tr>
                <tr><td><strong>Data source (Origen de datos)</strong></td><td>Servicio de datos conectado a la app (SharePoint, SQL, Dataverse, etc.).</td></tr>
                <tr><td><strong>Connector (Conector)</strong></td><td>Componente que permite a una aplicación o flujo comunicarse con un servicio externo.</td></tr>
                <tr><td><strong>Trigger (Desencadenador)</strong></td><td>Evento que inicia automáticamente la ejecución de un flujo de Power Automate.</td></tr>
                <tr><td><strong>Action (Acción)</strong></td><td>Paso que realiza una tarea concreta dentro de la secuencia de un flujo.</td></tr>
                <tr><td><strong>Dynamic content</strong></td><td>Valor extraído directamente de un trigger o de una acción previa para usarse en pasos posteriores.</td></tr>
                <tr><td><strong>Expression (Expresión)</strong></td><td>Fórmula que transforma, calcula o evalúa valores lógicos en Power Automate.</td></tr>
                <tr><td><strong>Run history</strong></td><td>Registro detallado de las ejecuciones de un flujo con datos de entrada, salida y errores.</td></tr>
                <tr><td><strong>Delegation (Delegación)</strong></td><td>Ejecución de consultas y filtros en el servidor de datos en lugar de descargar miles de filas a la app.</td></tr>
                <tr><td><strong>Patch</strong></td><td>Función de Power Fx que crea o modifica registros específicos en un origen de datos.</td></tr>
                <tr><td><strong>SubmitForm</strong></td><td>Función que procesa y envía los datos de un control Edit Form al origen de datos.</td></tr>
                <tr><td><strong>SharePoint site</strong></td><td>Sitio colaborativo de trabajo con bibliotecas, listas, páginas y permisos para un área o equipo.</td></tr>
                <tr><td><strong>Document library</strong></td><td>Biblioteca de SharePoint especializada en almacenar archivos con metadatos y versionado.</td></tr>
                <tr><td><strong>List item (Elemento de lista)</strong></td><td>Registro individual con valores de columna dentro de una lista de SharePoint o Lists.</td></tr>
                <tr><td><strong>Environment (Entorno)</strong></td><td>Espacio administrativo aislado para almacenar y gestionar recursos de Power Platform.</td></tr>
                <tr><td><strong>Solution (Solución)</strong></td><td>Paquete organizativo que agrupa apps, flujos, tablas y conexiones para facilitar el ALM.</td></tr>
                <tr><td><strong>Connection reference</strong></td><td>Puntero que administra las credenciales y conexiones de los conectores dentro de una solución.</td></tr>
                <tr><td><strong>Premium connector</strong></td><td>Conector cuyo uso requiere licencias adicionales de pago para los usuarios finales.</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      `,
      keyTakeaways: [
        "El dominio de este vocabulario técnico es indispensable para comunicarse con equipos de TI.",
        "Usa el buscador interactivo para acceder a las fichas completas con ejemplos prácticos."
      ]
    },

    {
      id: "mod-15",
      number: 15,
      title: "Fuentes Oficiales y Plan de Acción Personal",
      category: "Cierre y Evaluación",
      description: "Enlaces a documentación oficial de Microsoft Learn y checklist interactivo con los 10 criterios de autoevaluación para validar tu preparación.",
      objectives: [
        "Conocer las 19 fuentes oficiales de documentación de Microsoft Learn.",
        "Completar el Plan Personal de Acción de 10 puntos de autoevaluación.",
        "Comprobar tu preparación integral antes de asumir proyectos reales."
      ],
      contentHtml: `
        <div class="content-section">
          <h3 class="section-heading"><span class="heading-num">15.1</span> Fuentes Oficiales y Documentación de Microsoft Learn</h3>
          <p>Usa estos recursos oficiales de referencia continua cuando la interfaz cambie o requieras profundizar en sintaxis avanzada:</p>
          
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.5rem; margin: 1.25rem 0;">
            <li>📖 <strong>1. ¿Qué es Power Apps?</strong> (Microsoft Learn)</li>
            <li>📖 <strong>2. Guía de Canvas Apps</strong> (Microsoft Learn)</li>
            <li>📖 <strong>3. Introducción a Power Fx</strong></li>
            <li>📖 <strong>4. Orígenes de datos en Canvas Apps</strong></li>
            <li>📖 <strong>5. Conectores para Canvas Apps</strong></li>
            <li>📖 <strong>6. Función Patch en detalle</strong></li>
            <li>📖 <strong>7. Delegación y límites en Canvas Apps</strong></li>
            <li>📖 <strong>8. Formularios y DataCards en Power Apps</strong></li>
            <li>📖 <strong>9. Tipos de flujos en Power Automate</strong></li>
            <li>📖 <strong>10. Introducción a los flujos de nube</strong></li>
            <li>📖 <strong>11. Crear un flujo de nube sin Copilot</strong></li>
            <li>📖 <strong>12. Introducción a flujos de escritorio (RPA)</strong></li>
            <li>📖 <strong>13. Introducción a Microsoft Lists</strong></li>
            <li>📖 <strong>14. Crear listas desde la aplicación Lists</strong></li>
            <li>📖 <strong>15. Tipos de columnas en listas y bibliotecas</strong></li>
            <li>📖 <strong>16. Automatizar una lista</strong></li>
            <li>📖 <strong>17. Trabajar con documentos e historial de versiones</strong></li>
            <li>📖 <strong>18. Licenciamiento en Power Platform</strong></li>
            <li>📖 <strong>19. Conector Excel Online (Business)</strong></li>
          </ul>

          <h3 class="section-heading"><span class="heading-num">15.2</span> Plan Personal de Acción (Checklist de Autoevaluación)</h3>
          <p>Marca cada hito únicamente cuando lo hayas practicado y seas capaz de explicarlo con tus propias palabras:</p>
          
          <div id="interactive-action-checklist"></div>
        </div>
      `,
      keyTakeaways: [
        "El aprendizaje real se valida construyendo y probando soluciones en entornos aislados.",
        "Marca los 10 puntos del checklist para verificar tu preparación antes de modificar sistemas productivos."
      ]
    }
  ],

  // Flashcards for study
  flashcards: [
    {
      id: "fc-1",
      topic: "Fundamentos",
      front: "¿Cuál es la función principal de Power Apps dentro de Power Platform?",
      back: "Proveer la interfaz visual de usuario (UI) para que interactúe con el proceso empresarial mediante formularios y pantallas interactivas."
    },
    {
      id: "fc-2",
      topic: "Fundamentos",
      front: "¿Qué diferencia principal hay entre Microsoft Lists y SharePoint?",
      back: "Lists se enfoca en gestionar registros estructurados en columnas tabulares; SharePoint es el entorno colaborativo integral que almacena documentos, sitios, bibliotecas y gestiona permisos de seguridad."
    },
    {
      id: "fc-3",
      topic: "Desarrollo",
      front: "¿Qué es la 'Delegación' en Power Apps y por qué es crítica?",
      back: "Es la capacidad de delegar el procesamiento de filtros y búsquedas al servidor de datos. Si una fórmula no es delegable, Power Apps solo puede procesar un límite de filas (500 a 2.000), dando resultados incompletos."
    },
    {
      id: "fc-4",
      topic: "Desarrollo",
      front: "¿Cuándo se usa SubmitForm y cuándo se usa Patch?",
      back: "SubmitForm se utiliza cuando un control Edit Form administra la creación o edición con DataCards estándar; Patch se usa para crear o actualizar registros con lógica y estructuras altamente personalizadas."
    },
    {
      id: "fc-5",
      topic: "Automatización",
      front: "¿Por qué un flujo de modificación puede generar un bucle infinito?",
      back: "Porque si el trigger es 'When an item is modified' y dentro del flujo se actualiza ese mismo registro con 'Update item', el flujo se reactiva a sí mismo indefinidamente si no tiene condiciones anti-bucle."
    },
    {
      id: "fc-6",
      topic: "Seguridad",
      front: "¿Ocultar un botón con Visible = false protege la información en la base de datos?",
      back: "No. Ocultar controles solo cambia la presentación visual; cualquier usuario con permisos en la lista o conector puede acceder a los datos. La seguridad real debe configurarse en el origen de datos."
    },
    {
      id: "fc-7",
      topic: "Automatización",
      front: "¿Para qué sirve la función coalesce() en expresiones de Power Automate?",
      back: "Devuelve el primer valor no nulo de una lista de argumentos, evitando fallos cuando un campo de entrada viene vacío."
    },
    {
      id: "fc-8",
      topic: "Datos",
      front: "¿Por qué no se debe usar una hoja de Excel como base de datos multiusuario?",
      back: "Por bloqueos de concurrencia, lentitud en el conector, falta de tipado estricto a nivel de fila y ausencia de seguridad por rol robusta."
    },
    {
      id: "fc-9",
      topic: "Despliegue",
      front: "¿Cuál es la diferencia entre Guardar y Publicar una Canvas App?",
      back: "Guardar conserva los cambios en el editor para el desarrollador; Publicar hace disponible esa versión guardada para que los usuarios finales la puedan utilizar."
    },
    {
      id: "fc-10",
      topic: "Gobierno",
      front: "¿Qué es una 'Cuenta de Servicio' y por qué se recomienda en flujos de producción?",
      back: "Es una cuenta no ligada a un empleado particular, lo que evita que los flujos empresariales fallen cuando un trabajador cambia de puesto o abandona la organización."
    }
  ],

  // Interactive Quizzes
  quizzes: [
    {
      id: "quiz-general",
      title: "Evaluación General de Certificación Power Platform",
      questions: [
        {
          id: "q1",
          question: "¿Cuál de las siguientes afirmaciones sobre las Vistas de Microsoft Lists es VERDADERA?",
          options: [
            "Crear una vista genera una copia física independiente de todos los registros.",
            "Ocultar una columna en una vista garantiza que los usuarios no puedan leer ese dato.",
            "Una vista es una forma guardada de presentar y filtrar registros sin duplicar datos ni reemplazar los permisos de seguridad.",
            "Las vistas solo funcionan si la lista tiene menos de 100 elementos."
          ],
          correctIndex: 2,
          explanation: "Una vista no duplica datos ni actúa como barrera de seguridad; solo define qué columnas, orden y filtros visuales se aplican sobre el origen."
        },
        {
          id: "q2",
          question: "Si tu fórmula en Power Apps muestra una advertencia de Delegación al filtrar 5.000 registros, ¿qué consecuencia ocurrirá?",
          options: [
            "La aplicación se cerrará inmediatamente con un error crítico.",
            "Power Apps solo descargará y filtrará el subconjunto inicial (máx 500-2.000 filas), omitiendo registros válidos del servidor.",
            "La lista de SharePoint se borrará automáticamente.",
            "El límite de filas se aumentará automáticamente a 100.000 sin advertencias."
          ],
          correctIndex: 1,
          explanation: "Al no poder delegar la consulta al servidor, Power Apps solo puede procesar el límite local configurado en la app, ignorando los registros restantes."
        },
        {
          id: "q3",
          question: "¿Qué propiedad de un control Edit Form en Power Apps es la más adecuada para notificar al usuario que la operación de guardado finalizó con éxito?",
          options: [
            "OnSelect del botón Guardar inmediatamente antes de SubmitForm.",
            "OnSuccess del propio formulario.",
            "OnVisible de la primera pantalla de la aplicación.",
            "DefaultMode del control de texto."
          ],
          correctIndex: 1,
          explanation: "La propiedad OnSuccess del formulario se ejecuta únicamente cuando el servidor confirma que los datos fueron guardados sin errores."
        },
        {
          id: "q4",
          question: "¿Qué herramienta es la más apropiada para enviar una solicitud de aprobación por correo y esperar la respuesta del aprobador?",
          options: [
            "Microsoft Lists directamente mediante reglas de aviso básicas.",
            "Power Automate mediante la acción 'Start and wait for an approval'.",
            "Power BI mediante una medida DAX.",
            "Power Apps usando la función Set()."
          ],
          correctIndex: 1,
          explanation: "Power Automate cuenta con el motor de aprobaciones formal (Approvals) que gestiona estados, vencimientos, comentarios y reanudación del flujo tras la decisión."
        },
        {
          id: "q5",
          question: "Antes de realizar cualquier modificación sobre una aplicación corporativa existente en producción, ¿cuál es el paso de seguridad indispensable?",
          options: [
            "Cambiar todos los permisos del sitio para que nadie pueda entrar.",
            "Reescribir todas las fórmulas en el entorno productivo directamente.",
            "Identificar el entorno, documentar la versión previa y confirmar el plan de reversión y pruebas en desarrollo.",
            "Exportar la lista a Excel y borrar la Canvas App."
          ],
          correctIndex: 2,
          explanation: "Siempre se debe trabajar en desarrollo, auditar dependencias y tener claro cómo restaurar la versión anterior en caso de incidencia."
        }
      ]
    }
  ],

  // 10 Action plan checklist items
  checklistItems: [
    "Puedo explicar la diferencia entre Lists y bibliotecas de SharePoint.",
    "Puedo crear una lista con tipos de columna apropiados y una vista filtrada.",
    "Puedo explicar cómo revisar permisos e historial de versiones.",
    "Puedo identificar pantallas, controles, propiedades y fórmulas de una Canvas App.",
    "Puedo leer una fórmula If, Filter, LookUp y reconocer Patch / SubmitForm.",
    "Puedo distinguir un trigger de una acción en Power Automate.",
    "Puedo crear un flujo simple, probarlo y revisar su historial de ejecución.",
    "Puedo explicar por qué un flujo puede duplicarse o no ejecutarse.",
    "Puedo documentar el origen de datos, conectores, permisos y pruebas de una app.",
    "Antes de editar producción, sé a quién pedir aprobación y cómo revertir el cambio."
  ]
};
