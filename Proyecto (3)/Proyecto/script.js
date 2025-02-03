function redirigir() {
    var seleccion = document.querySelector('input[name="option"]:checked').value;
    if (seleccion) {
        mostrarMensajeEnNuevaPestana(seleccion);
        return false;
    }
    alert("Por favor, selecciona una opción.");
    return false;
}

function mostrarMensajeEnNuevaPestana(seleccion) {
    var nuevaVentana = window.open("", "_blank");
    var mensaje = `
        <html>
            <head>
                <title>Área Seleccionada - Municipio de Ixtapaluca</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        padding: 20px;
                        display: flex;
                        flex-direction: column;
                    }
                    .image {
                        width: 70%;
                        height: 400px;
                        margin-top: 20px;
                    }
                    .info {
                        width: 70%;
                        padding-left: 20px;
                    }
                    .info-box {
                        border: 1px solid #ccc;
                        padding: 10px;
                        margin-top: 20px;
                        background-color: rgba(255, 255, 255, 0.8);
                    }
                </style>
            </head>
            <body>
                <div class="top-info">
                    <h2>Área Seleccionada - Municipio de Ixtapaluca</h2>
                    <p>Bienvenido a la sección de Rutas del Municipio. Usted seleccionó <strong>${seleccion}</strong>. Aquí encontrará la ruta recomendada para llegar al área seleccionada.</p>
                </div>
                <div class="image-container">
                    <!-- Reemplazo del mapa de Google con una imagen estática -->
                    <img src="C:\Proyecto (3)\Proyecto/${seleccion}.jpeg" class="image" alt="Imagen del área seleccionada">
                </div>
                <div class="info-box">
                    <h3>Información Adicional</h3>
                    ${obtenerInformacionAdicional(seleccion)}
                </div>
            </body>
        </html>
    `;
    nuevaVentana.document.write(mensaje);
    nuevaVentana.document.close();
}

function obtenerInformacionAdicional(seleccion) {
    switch (seleccion) {
        case 'Cartillas':
            return `
                <p>Trámites que se realizan en el área de Cartillas:</p>
                <ul>
                    <li><strong>Trámite de Cartilla del Servicio Militar:</strong>
                        <ul>
                            <li>Registro Inicial: Los jóvenes que cumplen 18 años deben registrarse para obtener su cartilla del Servicio Militar Nacional (SMN).</li>
                            <li>Entrega de Cartilla: Después del registro y de cumplir con los requisitos, se entrega la cartilla militar.</li>
                            <li>Constancia de Liberación: Una vez cumplido el Servicio Militar, se puede tramitar la constancia de liberación de la cartilla.</li>
                        </ul>
                    </li>
                    <li><strong>Reposición de Cartilla:</strong>
                        <ul>
                            <li>Duplicado por Pérdida o Robo: Si la cartilla militar ha sido extraviada o robada, se puede solicitar un duplicado presentando los documentos necesarios.</li>
                        </ul>
                    </li>
                    <li><strong>Corrección de Datos:</strong>
                        <ul>
                            <li>Actualización de Información: Si hay algún error en la cartilla militar, se pueden corregir los datos presentando la documentación requerida.</li>
                        </ul>
                    </li>
                    <li><strong>Liberación Anticipada de Cartilla:</strong>
                        <ul>
                            <li>Excepciones y Casos Especiales: En ciertos casos, se puede solicitar la liberación anticipada de la cartilla por motivos de salud, educación o trabajo, siempre y cuando se presenten las pruebas necesarias.</li>
                        </ul>
                    </li>
                </ul>
            `;

        case 'No antecedentes':
            return `
                <p>Trámites que se realizan en el área de Licencias:</p>
                <ul>
                    <li>Para obtener una constancia de no antecedentes penales en el municipio de Ixtapaluca, puedes seguir estos pasos:
                        <ul>
                            <li>Reunir la documentación necesaria (Acta de nacimiento, Identificación oficial, etc.).</li>
                            <li>Solicitar una cita a través de la Ventanilla Única Electrónica.</li>
                            <li>Presentar la solicitud en la oficina correspondiente con la documentación.</li>
                            <li>Pagar la tarifa correspondiente para el trámite.</li>
                            <li>Recepción del documento: La constancia de no antecedentes será emitida una vez procesada la solicitud.</li>
                        </ul>
                    </li>
                </ul>
            `;
        case 'Oficial':
            return `
                <p>Trámites que se realizan en el área de Predial:</p>
                <ul>
                    <li><strong>Oficina de Partes:</strong> Se encarga de recibir, registrar y canalizar documentos y solicitudes.
                        <ul>
                            <li>Recepción de Documentos.</li>
                            <li>Registro y Control de documentos.</li>
                            <li>Canalización a las áreas correspondientes.</li>
                            <li>Seguimiento de trámites.</li>
                        </ul>
                    </li>
                </ul>
            `;
        case 'Desarrollo':
            return `
                <p>Trámites que se realizan en el área de Desarrollo Económico:</p>
                <ul>
                    <li><strong>Fomento a la Inversión:</strong> Incentivos y facilidades para atraer inversión.</li>
                    <li><strong>Capacitación y Empleo:</strong> Programas de capacitación laboral y facilitación de inserción laboral.</li>
                    <li><strong>Apoyo a PYMES:</strong> Asesoría y apoyo a pequeñas y medianas empresas.</li>
                    <li><strong>Desarrollo de Infraestructura:</strong> Proyectos de infraestructura que favorecen el crecimiento económico.</li>
                </ul>
            `;
        case 'Catastro':
            return `
                <p>Trámites que se realizan en el área de Catastro:</p>
                <ul>
                    <li><strong>Certificación de Clave y Valor Catastral:</strong> Certificados con los datos de identificación catastral.</li>
                    <li><strong>Levantamiento Topográfico:</strong> Actualización de datos a través de levantamientos.</li>
                    <li><strong>Traslado de Dominio:</strong> Gestión de cambios de propietario de inmuebles.</li>
                    <li><strong>Verificación de Linderos:</strong> Resolución de conflictos de límites y colindancias de predios.</li>
                </ul>
            `;
        case 'Recaudacion':
            return `
                <p>Trámites que se realizan en el área de Recaudación:</p>
                <ul>
                    <li><strong>Certificado de No Adeudo Predial:</strong> Certificados que acreditan que un inmueble no tiene adeudos fiscales.</li>
                    <li><strong>Cobro de Impuestos:</strong> Gestión de cobros de contribuciones municipales.</li>
                    <li><strong>Factura Electrónica:</strong> Emisión de facturas electrónicas por pagos realizados.</li>
                    <li><strong>Certificados de Aportación de Mejoras:</strong> Certificados sobre contribuciones a mejoras en infraestructura municipal.</li>
                </ul>
            `;
            case 'Sindicatura 1':
    return `
        <p>Trámites que se realizan en el área de Predial:</p>
        <ul>
            <li>¿Qué es la Sindicatura?
            La Sindicatura del municipio de Ixtapaluca es una entidad encargada de representar los intereses del municipio y sus habitantes en asuntos legales y administrativos. Su función principal es asegurar que las acciones del gobierno municipal se realicen conforme a la ley y en beneficio de la comunidad.

            Funciones Principales:
            <ul>
                <li>Representación Legal: Actúa como representante legal del municipio en juicios y procedimientos legales.</li>
                <li>Supervisión y Control: Vigila que las dependencias municipales cumplan con las normativas y leyes vigentes.</li>
                <li>Asesoría Jurídica: Proporciona asesoría legal a las diferentes áreas del gobierno municipal y a los ciudadanos.</li>
                <li>Promulgación de Normativas: Participa en la elaboración y promulgación de reglamentos y normativas municipales.</li>
                <li>Defensa de los Derechos Ciudadanos: Protege los derechos e intereses de los ciudadanos en asuntos relacionados con el gobierno municipal.</li>
            </ul>
            ¿Cómo Contactar a la Sindicatura?
            Para más información o para recibir asesoría legal, puedes visitar la Ventanilla Única Electrónica del gobierno de Ixtapaluca o acudir directamente a las oficinas municipales.
            </li>
        </ul>
    `;
case 'Asuntos Indigenas':
    return `
        <p>Trámites que se realizan en el área de Predial:</p>
        <ul>
            <li>¿Qué es Asuntos Indígenas?
            El área de Asuntos Indígenas del municipio de Ixtapaluca se dedica a promover y proteger los derechos y la cultura de las comunidades indígenas y afromexicanas. Su objetivo es asegurar la inclusión y el desarrollo integral de estos grupos, respetando y valorando su identidad y tradiciones.

            Funciones Principales:
            <ul>
                <li>Promoción de Derechos: Difunde y defiende los derechos de las comunidades indígenas y afromexicanas, asegurando su acceso a servicios y oportunidades.</li>
                <li>Programas de Desarrollo: Implementa programas y proyectos que fomentan el desarrollo económico, social y cultural de estas comunidades.</li>
                <li>Asesoría y Apoyo: Proporciona asesoría legal y apoyo en la gestión de trámites y servicios públicos.</li>
                <li>Fomento Cultural: Organiza eventos y actividades que promueven la cultura y las tradiciones indígenas y afromexicanas.</li>
                <li>Educación y Capacitación: Ofrece programas educativos y de capacitación para mejorar las oportunidades de desarrollo de las comunidades.</li>
            </ul>
            </li>
        </ul>
    `;
case 'Desarrollo Urbano y Territorial':
    return `
        <p>Trámites que se realizan en el área de Predial:</p>
        <ul>
            <li>¿Qué es Desarrollo Urbano y Territorial?
            El área de Desarrollo Urbano y Territorial del municipio de Ixtapaluca se encarga de planificar, regular y promover el uso adecuado del suelo y el desarrollo urbano. Su objetivo es garantizar un crecimiento ordenado y sostenible del municipio, mejorando la calidad de vida de sus habitantes.

            Funciones Principales:
            <ul>
                <li>Licencias de Construcción: Emite licencias para la construcción de edificaciones, asegurando que cumplan con las normativas vigentes.</li>
                <li>Cambio de Uso de Suelo: Gestiona las solicitudes para el cambio de uso de suelo, densidad, intensidad y altura de edificaciones.</li>
                <li>Certificación de Alineamiento y Número Oficial: Proporciona certificados que establecen los límites y la numeración oficial de los inmuebles.</li>
                <li>Regularización de Predios: Facilita la regularización de predios para asegurar que todos los inmuebles estén debidamente registrados y cumplan con las normativas.</li>
                <li>Planeación Urbana: Desarrolla y actualiza los planes de desarrollo urbano para orientar el crecimiento del municipio de manera ordenada y sostenible.</li>
            </ul>
            </li>
        </ul>
    `;
case 'Sistemas':
    return `
        <p>Trámites que se realizan en el área de Predial:</p>
        <ul>
            <li>¿Qué es el área de Sistemas?
            El área de Sistemas del municipio de Ixtapaluca se encarga de la implementación, mantenimiento y mejora de las tecnologías de la información y comunicación (TIC) en el gobierno municipal. Su objetivo es optimizar los procesos administrativos y mejorar la calidad de los servicios ofrecidos a los ciudadanos mediante el uso de herramientas tecnológicas.

            Funciones Principales:
            <ul>
                <li>Desarrollo y Mantenimiento de Sistemas: Diseña, desarrolla y mantiene sistemas informáticos que facilitan la gestión y operación de las diferentes áreas del gobierno municipal.</li>
                <li>Soporte Técnico: Proporciona soporte técnico a las dependencias municipales para asegurar el correcto funcionamiento de los equipos y sistemas informáticos.</li>
                <li>Seguridad Informática: Implementa medidas de seguridad para proteger la información y los sistemas del gobierno municipal contra amenazas y ataques cibernéticos.</li>
                <li>Digitalización de Procesos: Promueve la digitalización de trámites y servicios para hacerlos más accesibles y eficientes para los ciudadanos.</li>
                <li>Capacitación en TIC: Ofrece programas de capacitación en tecnologías de la información y comunicación para el personal del gobierno municipal.</li>
            </ul>
            </li>
        </ul>
    `;
case 'Panteones':
    return `
        <p>Trámites que se realizan en el área de Predial:</p>
        <ul>
            <li>¿Qué es el área de Panteones?
            El área de Panteones del municipio de Ixtapaluca se encarga de la administración, mantenimiento y regulación de los cementerios municipales. Su objetivo es proporcionar un servicio digno y respetuoso para la inhumación y exhumación de los restos humanos, así como asegurar que los panteones se mantengan en condiciones adecuadas para los visitantes.

            Funciones Principales:
            <ul>
                <li>Inhumación y Exhumación: Gestiona los procesos de inhumación (entierro) y exhumación (desentierro) de restos humanos, asegurando que se realicen conforme a las normativas vigentes.</li>
                <li>Mantenimiento de Panteones: Se encarga del mantenimiento y limpieza de los panteones municipales para garantizar un entorno seguro y respetuoso.</li>
                <li>Asignación de Espacios: Administra la asignación de espacios para sepulturas, asegurando que se cumplan los requisitos y procedimientos establecidos.</li>
                <li>Trámites y Permisos: Emite los permisos necesarios para la inhumación y exhumación, así como otros trámites relacionados con los servicios funerarios.</li>
                <li>Atención a los Ciudadanos: Proporciona información y asistencia a los ciudadanos sobre los servicios disponibles y los procedimientos a seguir.</li>
            </ul>
            </li>
        </ul>
    `;
case 'Bienestar Desarrollo':
    return `
        <p>Trámites que se realizan en el área de Predial:</p>
        <ul>
            <li>¿Qué es Bienestar y Desarrollo?
            El área de Bienestar y Desarrollo del municipio de Ixtapaluca se dedica a implementar programas y políticas que mejoren la calidad de vida de los ciudadanos. Su objetivo es promover el bienestar social, económico y cultural de la comunidad, asegurando que todos los habitantes tengan acceso a servicios y oportunidades que les permitan desarrollarse plenamente.

            Funciones Principales:
            <ul>
                <li>Programas Sociales: Desarrolla e implementa programas sociales dirigidos a grupos vulnerables, como personas de la tercera edad, mujeres, niños y personas con discapacidad.</li>
                <li>Apoyo Económico: Ofrece asistencia económica y recursos para apoyar a familias de bajos ingresos y fomentar el desarrollo económico local.</li>
                <li>Salud y Nutrición: Promueve campañas de salud y nutrición para mejorar el bienestar físico y mental de los ciudadanos.</li>
                <li>Educación y Capacitación: Proporciona programas educativos y de capacitación para mejorar las habilidades y oportunidades de los habitantes.</li>
                <li>Cultura y Recreación: Organiza actividades culturales y recreativas para fomentar la integración social y el desarrollo cultural de la comunidad.</li>
            </ul>
            </li>
        </ul>
    `;
case 'Recursos Humanos':
    return `
        <p>Trámites que se realizan en el área de Predial:</p>
        <ul>
            <li>¿Qué es el área de Recursos Humanos?
            El área de Recursos Humanos del municipio de Ixtapaluca se encarga de gestionar y coordinar todos los aspectos relacionados con el personal del gobierno municipal. Su objetivo es asegurar que los empleados municipales cuenten con las condiciones necesarias para desempeñar sus funciones de manera eficiente y satisfactoria.

            Funciones Principales:
            <ul>
                <li>Reclutamiento y Selección: Realiza procesos de reclutamiento y selección para cubrir vacantes en las diferentes áreas del gobierno municipal.</li>
                <li>Capacitación y Desarrollo: Ofrece programas de capacitación y desarrollo profesional para mejorar las habilidades y competencias del personal.</li>
                <li>Administración de Personal: Gestiona la nómina, prestaciones y beneficios de los empleados municipales, asegurando el cumplimiento de las normativas laborales.</li>
                <li>Evaluación del Desempeño: Implementa sistemas de evaluación del desempeño para medir y mejorar la productividad y eficiencia del personal.</li>
                <li>Bienestar Laboral: Promueve iniciativas y programas que fomenten el bienestar y la satisfacción laboral de los empleados.</li>
            </ul>
            </li>
        </ul>
    `;
case '(PisodeArriba)Regiduria 1':
    return `
        <p>Trámites que se realizan en el área de Predial:</p>
        <ul>
            <li>¿Qué es la Regiduría?
            La Regiduría del municipio de Ixtapaluca es una entidad encargada de representar a la ciudadanía dentro del Ayuntamiento. Los regidores participan activamente en las decisiones que afectan al municipio, asegurando que las necesidades y preocupaciones de los habitantes sean consideradas en la gestión municipal.

            Funciones Principales:
            <ul>
                <li>Representación Ciudadana: Los regidores actúan como representantes de los ciudadanos, llevando sus inquietudes y propuestas al Ayuntamiento.</li>
                <li>Participación en Comisiones: Forman parte de diversas comisiones que abordan temas específicos como seguridad, desarrollo urbano, salud, educación, entre otros.</li>
                <li>Elaboración de Reglamentos: Contribuyen a la creación y modificación de reglamentos y normativas municipales para mejorar la administración y servicios públicos.</li>
                <li>Supervisión y Control: Vigilan el cumplimiento de las políticas y programas municipales, asegurando la transparencia y eficiencia en la gestión pública.</li>
                <li>Gestión de Recursos: Participan en la gestión y asignación de recursos municipales para proyectos y programas que beneficien a la comunidad.</li>
            </ul>
            </li>
        </ul>
    `;
case 'Sindicatura 2':
    return `
        <p>Trámites que se realizan en el área de Predial:</p>
        <ul>
            <li>¿Qué es la Sindicatura?
            La Sindicatura del municipio de Ixtapaluca es una entidad encargada de representar los intereses del municipio y sus habitantes en asuntos legales y administrativos. Su función principal es asegurar que las acciones del gobierno municipal se realicen conforme a la ley y en beneficio de la comunidad.

            Funciones Principales:
            <ul>
                <li>Representación Legal: Actúa como representante legal del municipio en juicios y procedimientos legales.</li>
                <li>Supervisión y Control: Vigila que las dependencias municipales cumplan con las normativas y leyes vigentes.</li>
                <li>Asesoría Jurídica: Proporciona asesoría legal a las diferentes áreas del gobierno municipal y a los ciudadanos.</li>
                <li>Promulgación de Normativas: Participa en la elaboración y promulgación de reglamentos y normativas municipales.</li>
                <li>Defensa de los Derechos Ciudadanos: Protege los derechos e intereses de los ciudadanos en asuntos relacionados con el gobierno municipal.</li>
            </ul>
            ¿Cómo Contactar a la Sindicatura?
            Para más información o para recibir asesoría legal, puedes visitar la Ventanilla Única Electrónica del gobierno de Ixtapaluca o acudir directamente a las oficinas municipales.
            </li>
        </ul>
    `;
case 'Secretaria del Ayuntamiento':
    return `
        <p>Trámites que se realizan en el área de Predial:</p>
        <ul>
            <li>¿Qué es la Secretaría del Ayuntamiento?
            La Secretaría del Ayuntamiento del municipio de Ixtapaluca es la entidad encargada de coordinar y supervisar las actividades administrativas y legislativas del gobierno municipal. Su objetivo es asegurar el correcto funcionamiento del Ayuntamiento y la transparencia en la gestión pública.

            Funciones Principales:
            <ul>
                <li>Gestión de Trámites y Servicios: Administra y coordina la recepción y procesamiento de diversos trámites y servicios municipales, como permisos, constancias y registros.</li>
                <li>Atención Ciudadana: Proporciona atención y asesoría a los ciudadanos sobre los trámites y servicios disponibles, asegurando una respuesta oportuna y eficiente.</li>
                <li>Elaboración de Actas y Documentos Oficiales: Redacta y custodia las actas de las sesiones de Cabildo, así como otros documentos oficiales del Ayuntamiento.</li>
                <li>Supervisión de Reglamentos y Normativas: Asegura el cumplimiento de los reglamentos y normativas municipales, promoviendo la legalidad y el orden en la administración pública.</li>
                <li>Coordinación de Comisiones: Coordina las actividades de las comisiones del Ayuntamiento, facilitando la colaboración y el trabajo conjunto entre las diferentes áreas del gobierno municipal.</li>
            </ul>
            </li>
        </ul>
    `;
    case 'Derechos':
        return `
            <p>Trámites que se realizan en el área de Derechos:</p>
            <ul>
                <li><strong>¿Qué es el área de Derechos?</strong>
                    El área de Derechos del municipio de Ixtapaluca se dedica a promover y proteger los derechos humanos de todos los habitantes. Su objetivo es asegurar que cada persona pueda ejercer sus derechos de manera plena y sin discriminación, fomentando una cultura de respeto y equidad.
                </li>
                <li><strong>Funciones Principales:</strong>
                    <ul>
                        <li>Promoción de Derechos Humanos: Difunde información sobre los derechos humanos y las leyes que los protegen, organizando campañas y eventos educativos.</li>
                        <li>Asesoría Jurídica: Proporciona asesoría legal gratuita a los ciudadanos sobre sus derechos y cómo defenderlos.</li>
                        <li>Atención a Víctimas: Ofrece apoyo y asistencia a víctimas de violaciones de derechos humanos, incluyendo asesoría legal y psicológica.</li>
                        <li>Capacitación y Sensibilización: Realiza programas de capacitación y sensibilización para funcionarios públicos y la comunidad en general sobre la importancia de los derechos humanos.</li>
                        <li>Vigilancia y Supervisión: Monitorea el cumplimiento de las leyes y normativas relacionadas con los derechos humanos en el municipio.</li>
                    </ul>
                </li>
            </ul>
        `;
    case 'Constanea Domiciliaria':
        return `
            <p>Trámites que se realizan en el área de Predial:</p>
            <ul>
                <li><strong>¿Qué es la Constancia Domiciliaria?</strong>
                    La Constancia Domiciliaria es un documento oficial emitido por el municipio de Ixtapaluca que certifica la residencia de una persona en una dirección específica. Este documento es requerido para diversos trámites legales y administrativos, como la inscripción en escuelas, la obtención de servicios públicos y otros procedimientos oficiales.
                </li>
                <li><strong>Funciones Principales:</strong>
                    <ul>
                        <li>Verificación de Domicilio: Confirma la residencia de una persona en una dirección específica mediante la verificación de documentos y, en algunos casos, una visita domiciliaria.</li>
                        <li>Emisión del Documento: Una vez verificada la información, se emite la constancia que certifica el domicilio del solicitante.</li>
                        <li>Actualización de Datos: Permite la actualización de la información de residencia en los registros municipales.</li>
                        <li>Trámites Relacionados: Facilita la realización de otros trámites que requieren la comprobación de domicilio, como la inscripción en programas sociales y educativos.</li>
                    </ul>
                </li>
                <li><strong>Requisitos para Obtener la Constancia Domiciliaria:</strong>
                    <ul>
                        <li>Identificación oficial vigente (INE, pasaporte, etc.).</li>
                        <li>Comprobante de domicilio reciente (recibo de luz, agua, teléfono, etc.).</li>
                        <li>Formulario de solicitud debidamente llenado.</li>
                        <li>En algunos casos, fotografías recientes.</li>
                    </ul>
                </li>
                <li><strong>¿Cómo Solicitar la Constancia Domiciliaria?</strong>
                    <ul>
                        <li>Reunir la Documentación: Asegúrate de tener todos los documentos necesarios.</li>
                        <li>Solicitar una Cita: Puedes agendar una cita en línea a través de la Ventanilla Única Electrónica del gobierno de Ixtapaluca.</li>
                        <li>Presentar la Solicitud: Acude a la oficina correspondiente con todos los documentos y llena el formulario de solicitud.</li>
                        <li>Pago de Tarifas: Paga la tarifa correspondiente para el trámite.</li>
                        <li>Recepción del Documento: Una vez procesada la solicitud, se emitirá la Constancia Domiciliaria.</li>
                    </ul>
                </li>
            </ul>
        `;
    case 'Contaduria':
        return `
            <p>Trámites que se realizan en el área de Predial:</p>
            <ul>
                <li><strong>¿Qué es el área de Contaduría?</strong>
                    El área de Contaduría del municipio de Ixtapaluca se encarga de la gestión financiera y contable del gobierno municipal. Su objetivo es asegurar la transparencia, eficiencia y legalidad en el manejo de los recursos públicos, contribuyendo al desarrollo y bienestar de la comunidad.
                </li>
                <li><strong>Funciones Principales:</strong>
                    <ul>
                        <li>Registro Contable: Lleva el registro de todas las operaciones financieras del municipio, asegurando que se cumplan las normativas contables y fiscales.</li>
                        <li>Elaboración de Estados Financieros: Prepara y presenta los estados financieros del municipio, proporcionando información clara y precisa sobre la situación económica y financiera.</li>
                        <li>Control Presupuestal: Supervisa y controla la ejecución del presupuesto municipal, garantizando el uso adecuado de los recursos públicos.</li>
                        <li>Auditorías y Fiscalización: Realiza auditorías internas para verificar el cumplimiento de las normativas y detectar posibles irregularidades.</li>
                        <li>Asesoría Financiera: Proporciona asesoría y apoyo en materia financiera y contable a las diferentes áreas del gobierno municipal.</li>
                    </ul>
                </li>
            </ul>
        `;
    case 'Administracion':
        return `
            <p>Trámites que se realizan en el área de Predial:</p>
            <ul>
                <li><strong>¿Qué es el área de Administración?</strong>
                    El área de Administración del municipio de Ixtapaluca se encarga de coordinar y supervisar las actividades administrativas del gobierno municipal. Su objetivo es asegurar la eficiencia, transparencia y legalidad en la gestión de los recursos públicos, contribuyendo al desarrollo y bienestar de la comunidad.
                </li>
                <li><strong>Funciones Principales:</strong>
                    <ul>
                        <li>Gestión de Recursos: Administra los recursos humanos, materiales y financieros del municipio, asegurando su uso eficiente y transparente.</li>
                        <li>Planeación y Organización: Desarrolla planes y estrategias para mejorar la gestión administrativa y optimizar los procesos internos.</li>
                        <li>Control y Supervisión: Supervisa el cumplimiento de las normativas y procedimientos administrativos, garantizando la legalidad y transparencia en todas las operaciones.</li>
                        <li>Atención Ciudadana: Proporciona atención y servicios a los ciudadanos, facilitando la realización de trámites y la obtención de información.</li>
                        <li>Mejora Continua: Implementa acciones de mejora continua para modernizar y agilizar los procesos administrativos, utilizando herramientas tecnológicas y promoviendo la capacitación del personal.</li>
                    </ul>
                </li>
            </ul>
        `;
    case 'Coordinación':
        return `
            <p>Trámites que se realizan en el área de Predial:</p>
            <ul>
                <li><strong>¿Qué es el área de Coordinación?</strong>
                    El área de Coordinación del municipio de Ixtapaluca se encarga de organizar y ejecutar el plan operativo del gobierno municipal, así como de estructurar y supervisar los diversos programas y servicios que se ofrecen a la comunidad. Su objetivo es asegurar una gestión eficiente y coordinada entre las diferentes dependencias municipales y con otras autoridades.
                </li>
                <li><strong>Funciones Principales:</strong>
                    <ul>
                        <li>Planificación Operativa: Desarrolla y ejecuta el plan operativo del municipio, asegurando que todas las actividades y proyectos se realicen de manera eficiente y conforme a los objetivos establecidos.</li>
                        <li>Supervisión de Programas: Coordina y supervisa la implementación de programas y servicios municipales, garantizando su correcta ejecución y el cumplimiento de metas.</li>
                        <li>Colaboración Interinstitucional: Trabaja en conjunto con autoridades federales, estatales y municipales para promover acciones y programas que beneficien a la comunidad.</li>
                        <li>Evaluación y Mejora Continua: Realiza evaluaciones periódicas de los programas y servicios para identificar áreas de mejora y asegurar la calidad en la gestión municipal.</li>
                        <li>Atención Ciudadana: Proporciona información y asistencia a los ciudadanos sobre los programas y servicios disponibles, facilitando su acceso y participación.</li>
                    </ul>
                </li>
            </ul>
        `;    
        case 'Unidades Habitacionales':
            return `
                <p>Trámites que se realizan en el área de Unidades Habitacionales:</p>
                <ul>
                    <li><strong>¿Qué son las Unidades Habitacionales?</strong>
                        Las Unidades Habitacionales en el municipio de Ixtapaluca son conjuntos de viviendas diseñadas para proporcionar un entorno seguro y cómodo a sus residentes. Estas unidades están distribuidas a lo largo del municipio y representan una parte significativa de la población local.
                    </li>
                    <li><strong>Funciones Principales:</strong>
                        <ul>
                            <li><strong>Vivienda Asequible:</strong> Proporcionan opciones de vivienda asequible para familias de diferentes niveles socioeconómicos.</li>
                            <li><strong>Infraestructura y Servicios:</strong> Están equipadas con infraestructura básica y servicios esenciales como agua, electricidad, alcantarillado y áreas verdes.</li>
                            <li><strong>Mantenimiento y Seguridad:</strong> Se encargan del mantenimiento de las áreas comunes y de garantizar la seguridad de los residentes mediante la implementación de medidas de vigilancia.</li>
                            <li><strong>Espacios Comunitarios:</strong> Ofrecen espacios comunitarios como parques, áreas deportivas y centros comunitarios para fomentar la convivencia y el bienestar social.</li>
                            <li><strong>Gestión y Administración:</strong> Cuentan con una administración que se encarga de la gestión de los recursos y la resolución de problemas que puedan surgir en la comunidad.</li>
                        </ul>
                    </li>
                </ul>
            `;
        case 'Regiduria 2':
            return `
                <p>Trámites que se realizan en el área de Regiduría No.2:</p>
                <ul>
                    <li><strong>¿Qué es la Regiduría?</strong>
                        La Regiduría del municipio de Ixtapaluca es una entidad encargada de representar a la ciudadanía dentro del Ayuntamiento. Los regidores participan activamente en las decisiones que afectan al municipio, asegurando que las necesidades y preocupaciones de los habitantes sean consideradas en la gestión municipal.
                    </li>
                    <li><strong>Funciones Principales:</strong>
                        <ul>
                            <li><strong>Representación Ciudadana:</strong> Los regidores actúan como representantes de los ciudadanos, llevando sus inquietudes y propuestas al Ayuntamiento.</li>
                            <li><strong>Participación en Comisiones:</strong> Forman parte de diversas comisiones que abordan temas específicos como seguridad, desarrollo urbano, salud, educación, entre otros.</li>
                            <li><strong>Elaboración de Reglamentos:</strong> Contribuyen a la creación y modificación de reglamentos y normativas municipales para mejorar la administración y servicios públicos.</li>
                            <li><strong>Supervisión y Control:</strong> Vigilan el cumplimiento de las políticas y programas municipales, asegurando la transparencia y eficiencia en la gestión pública.</li>
                            <li><strong>Gestión de Recursos:</strong> Participan en la gestión y asignación de recursos municipales para proyectos y programas que beneficien a la comunidad.</li>
                        </ul>
                    </li>
                </ul>
            `;
        case 'Regiduria No.3':
            return `
                <p>Trámites que se realizan en el área de Regiduría No.3:</p>
                <ul>
                    <li><strong>¿Qué es la Regiduría?</strong>
                        La Regiduría del municipio de Ixtapaluca es una entidad encargada de representar a la ciudadanía dentro del Ayuntamiento. Los regidores participan activamente en las decisiones que afectan al municipio, asegurando que las necesidades y preocupaciones de los habitantes sean consideradas en la gestión municipal.
                    </li>
                    <li><strong>Funciones Principales:</strong>
                        <ul>
                            <li><strong>Representación Ciudadana:</strong> Los regidores actúan como representantes de los ciudadanos, llevando sus inquietudes y propuestas al Ayuntamiento.</li>
                            <li><strong>Participación en Comisiones:</strong> Forman parte de diversas comisiones que abordan temas específicos como seguridad, desarrollo urbano, salud, educación, entre otros.</li>
                            <li><strong>Elaboración de Reglamentos:</strong> Contribuyen a la creación y modificación de reglamentos y normativas municipales para mejorar la administración y servicios públicos.</li>
                            <li><strong>Supervisión y Control:</strong> Vigilan el cumplimiento de las políticas y programas municipales, asegurando la transparencia y eficiencia en la gestión pública.</li>
                            <li><strong>Gestión de Recursos:</strong> Participan en la gestión y asignación de recursos municipales para proyectos y programas que beneficien a la comunidad.</li>
                        </ul>
                    </li>
                </ul>
            `;
        case 'Regiduría No.4':
            return `
                <p>Trámites que se realizan en el área de Regiduría No.4:</p>
                <ul>
                    <li><strong>¿Qué es la Regiduría?</strong>
                        La Regiduría del municipio de Ixtapaluca es una entidad encargada de representar a la ciudadanía dentro del Ayuntamiento. Los regidores participan activamente en las decisiones que afectan al municipio, asegurando que las necesidades y preocupaciones de los habitantes sean consideradas en la gestión municipal.
                    </li>
                    <li><strong>Funciones Principales:</strong>
                        <ul>
                            <li><strong>Representación Ciudadana:</strong> Los regidores actúan como representantes de los ciudadanos, llevando sus inquietudes y propuestas al Ayuntamiento.</li>
                            <li><strong>Participación en Comisiones:</strong> Forman parte de diversas comisiones que abordan temas específicos como seguridad, desarrollo urbano, salud, educación, entre otros.</li>
                            <li><strong>Elaboración de Reglamentos:</strong> Contribuyen a la creación y modificación de reglamentos y normativas municipales para mejorar la administración y servicios públicos.</li>
                            <li><strong>Supervisión y Control:</strong> Vigilan el cumplimiento de las políticas y programas municipales, asegurando la transparencia y eficiencia en la gestión pública.</li>
                            <li><strong>Gestión de Recursos:</strong> Participan en la gestión y asignación de recursos municipales para proyectos y programas que beneficien a la comunidad.</li>
                        </ul>
                    </li>
                </ul>
            `;
        case 'Regiduría No.5':
            return `
                <p>Trámites que se realizan en el área de Regiduría No.5:</p>
                <ul>
                    <li><strong>¿Qué es la Regiduría?</strong>
                        La Regiduría del municipio de Ixtapaluca es una entidad encargada de representar a la ciudadanía dentro del Ayuntamiento. Los regidores participan activamente en las decisiones que afectan al municipio, asegurando que las necesidades y preocupaciones de los habitantes sean consideradas en la gestión municipal.
                    </li>
                    <li><strong>Funciones Principales:</strong>
                        <ul>
                            <li><strong>Representación Ciudadana:</strong> Los regidores actúan como representantes de los ciudadanos, llevando sus inquietudes y propuestas al Ayuntamiento.</li>
                            <li><strong>Participación en Comisiones:</strong> Forman parte de diversas comisiones que abordan temas específicos como seguridad, desarrollo urbano, salud, educación, entre otros.</li>
                            <li><strong>Elaboración de Reglamentos:</strong> Contribuyen a la creación y modificación de reglamentos y normativas municipales para mejorar la administración y servicios públicos.</li>
                            <li><strong>Supervisión y Control:</strong> Vigilan el cumplimiento de las políticas y programas municipales, asegurando la transparencia y eficiencia en la gestión pública.</li>
                            <li><strong>Gestión de Recursos:</strong> Participan en la gestión y asignación de recursos municipales para proyectos y programas que beneficien a la comunidad.</li>
                        </ul>
                    </li>
                </ul>
            `;
        case 'Regiduría No.6':
            return `
                <p>Trámites que se realizan en el área de Regiduría No.6:</p>
                <ul>
                    <li><strong>¿Qué es la Regiduría?</strong>
                        La Regiduría del municipio de Ixtapaluca es una entidad encargada de representar a la ciudadanía dentro del Ayuntamiento. Los regidores participan activamente en las decisiones que afectan al municipio, asegurando que las necesidades y preocupaciones de los habitantes sean consideradas en la gestión municipal.
                    </li>
                    <li><strong>Funciones Principales:</strong>
                        <ul>
                            <li><strong>Representación Ciudadana:</strong> Los regidores actúan como representantes de los ciudadanos, llevando sus inquietudes y propuestas al Ayuntamiento.</li>
                            <li><strong>Participación en Comisiones:</strong> Forman parte de diversas comisiones que abordan temas específicos como seguridad, desarrollo urbano, salud, educación, entre otros.</li>
                            <li><strong>Elaboración de Reglamentos:</strong> Contribuyen a la creación y modificación de reglamentos y normativas municipales para mejorar la administración y servicios públicos.</li>
                            <li><strong>Supervisión y Control:</strong> Vigilan el cumplimiento de las políticas y programas municipales, asegurando la transparencia y eficiencia en la gestión pública.</li>
                            <li><strong>Gestión de Recursos:</strong> Participan en la gestión y asignación de recursos municipales para proyectos y programas que beneficien a la comunidad.</li>
                        </ul>
                    </li>
                </ul>
            `;
        case 'Regiduría No.7':
            return `
                <p>Trámites que se realizan en el área de Regiduría No.7:</p>
                <ul>
                    <li><strong>¿Qué es la Regiduría?</strong>
                        La Regiduría del municipio de Ixtapaluca es una entidad encargada de representar a la ciudadanía dentro del Ayuntamiento. Los regidores participan activamente en las decisiones que afectan al municipio, asegurando que las necesidades y preocupaciones de los habitantes sean consideradas en la gestión municipal.
                    </li>
                    <li><strong>Funciones Principales:</strong>
                        <ul>
                            <li><strong>Representación Ciudadana:</strong> Los regidores actúan como representantes de los ciudadanos, llevando sus inquietudes y propuestas al Ayuntamiento.</li>
                            <li><strong>Participación en Comisiones:</strong> Forman parte de diversas comisiones que abordan temas específicos como seguridad, desarrollo urbano, salud, educación, entre otros.</li>
                            <li><strong>Elaboración de Reglamentos:</strong> Contribuyen a la creación y modificación de reglamentos y normativas municipales para mejorar la administración y servicios públicos.</li>
                            <li><strong>Supervisión y Control:</strong> Vigilan el cumplimiento de las políticas y programas municipales, asegurando la transparencia y eficiencia en la gestión pública.</li>
                            <li><strong>Gestión de Recursos:</strong> Participan en la gestión y asignación de recursos municipales para proyectos y programas que beneficien a la comunidad.</li>
                        </ul>
                    </li>
                </ul>
            `;
        case 'Regiduría No.8':
            return `
                <p>Trámites que se realizan en el área de Regiduría No.8:</p>
                <ul>
                    <li><strong>¿Qué es la Regiduría?</strong>
                        La Regiduría del municipio de Ixtapaluca es una entidad encargada de representar a la ciudadanía dentro del Ayuntamiento. Los regidores participan activamente en las decisiones que afectan al municipio, asegurando que las necesidades y preocupaciones de los habitantes sean consideradas en la gestión municipal.
                    </li>
                    <li><strong>Funciones Principales:</strong>
                        <ul>
                            <li><strong>Representación Ciudadana:</strong> Los regidores actúan como representantes de los ciudadanos, llevando sus inquietudes y propuestas al Ayuntamiento.</li>
                            <li><strong>Participación en Comisiones:</strong> Forman parte de diversas comisiones que abordan temas específicos como seguridad, desarrollo urbano, salud, educación, entre otros.</li>
                            <li><strong>Elaboración de Reglamentos:</strong> Contribuyen a la creación y modificación de reglamentos y normativas municipales para mejorar la administración y servicios públicos.</li>
                            <li><strong>Supervisión y Control:</strong> Vigilan el cumplimiento de las políticas y programas municipales, asegurando la transparencia y eficiencia en la gestión pública.</li>
                            <li><strong>Gestión de Recursos:</strong> Participan en la gestión y asignación de recursos municipales para proyectos y programas que beneficien a la comunidad.</li>
                        </ul>
                    </li>
                </ul>
            `;        
            case 'Regiduría No.9':
                return `
                    <p>Trámites que se realizan en el área de Predial:</p>
                    <ul>
                        <li>¿Qué es la Regiduría?
                        La Regiduría del municipio de Ixtapaluca es una entidad encargada de representar a la ciudadanía dentro del Ayuntamiento. Los regidores participan activamente en las decisiones que afectan al municipio, asegurando que las necesidades y preocupaciones de los habitantes sean consideradas en la gestión municipal.
            
                        <strong>Funciones Principales:</strong>
                        <ul>
                            <li><strong>Representación Ciudadana:</strong> Los regidores actúan como representantes de los ciudadanos, llevando sus inquietudes y propuestas al Ayuntamiento.</li>
                            <li><strong>Participación en Comisiones:</strong> Forman parte de diversas comisiones que abordan temas específicos como seguridad, desarrollo urbano, salud, educación, entre otros.</li>
                            <li><strong>Elaboración de Reglamentos:</strong> Contribuyen a la creación y modificación de reglamentos y normativas municipales para mejorar la administración y servicios públicos.</li>
                            <li><strong>Supervisión y Control:</strong> Vigilan el cumplimiento de las políticas y programas municipales, asegurando la transparencia y eficiencia en la gestión pública.</li>
                            <li><strong>Gestión de Recursos:</strong> Participan en la gestión y asignación de recursos municipales para proyectos y programas que beneficien a la comunidad.</li>
                        </ul>
                        </li>
                    </ul>
                `;
            case 'Regiduría No.10':
                return `
                    <p>Trámites que se realizan en el área de Predial:</p>
                    <ul>
                        <li>¿Qué es la Regiduría?
                        La Regiduría del municipio de Ixtapaluca es una entidad encargada de representar a la ciudadanía dentro del Ayuntamiento. Los regidores participan activamente en las decisiones que afectan al municipio, asegurando que las necesidades y preocupaciones de los habitantes sean consideradas en la gestión municipal.
            
                        <strong>Funciones Principales:</strong>
                        <ul>
                            <li><strong>Representación Ciudadana:</strong> Los regidores actúan como representantes de los ciudadanos, llevando sus inquietudes y propuestas al Ayuntamiento.</li>
                            <li><strong>Participación en Comisiones:</strong> Forman parte de diversas comisiones que abordan temas específicos como seguridad, desarrollo urbano, salud, educación, entre otros.</li>
                            <li><strong>Elaboración de Reglamentos:</strong> Contribuyen a la creación y modificación de reglamentos y normativas municipales para mejorar la administración y servicios públicos.</li>
                            <li><strong>Supervisión y Control:</strong> Vigilan el cumplimiento de las políticas y programas municipales, asegurando la transparencia y eficiencia en la gestión pública.</li>
                            <li><strong>Gestión de Recursos:</strong> Participan en la gestión y asignación de recursos municipales para proyectos y programas que beneficien a la comunidad.</li>
                        </ul>
                        </li>
                    </ul>
                `;
            case 'Regiduría No.11':
                return `
                    <p>Trámites que se realizan en el área de Predial:</p>
                    <ul>
                        <li>¿Qué es la Regiduría?
                        La Regiduría del municipio de Ixtapaluca es una entidad encargada de representar a la ciudadanía dentro del Ayuntamiento. Los regidores participan activamente en las decisiones que afectan al municipio, asegurando que las necesidades y preocupaciones de los habitantes sean consideradas en la gestión municipal.
            
                        <strong>Funciones Principales:</strong>
                        <ul>
                            <li><strong>Representación Ciudadana:</strong> Los regidores actúan como representantes de los ciudadanos, llevando sus inquietudes y propuestas al Ayuntamiento.</li>
                            <li><strong>Participación en Comisiones:</strong> Forman parte de diversas comisiones que abordan temas específicos como seguridad, desarrollo urbano, salud, educación, entre otros.</li>
                            <li><strong>Elaboración de Reglamentos:</strong> Contribuyen a la creación y modificación de reglamentos y normativas municipales para mejorar la administración y servicios públicos.</li>
                            <li><strong>Supervisión y Control:</strong> Vigilan el cumplimiento de las políticas y programas municipales, asegurando la transparencia y eficiencia en la gestión pública.</li>
                            <li><strong>Gestión de Recursos:</strong> Participan en la gestión y asignación de recursos municipales para proyectos y programas que beneficien a la comunidad.</li>
                        </ul>
                        </li>
                    </ul>
                `;
            case 'Regiduría No.12':
                return `
                    <p>Trámites que se realizan en el área de Predial:</p>
                    <ul>
                        <li>¿Qué es la Regiduría?
                        La Regiduría del municipio de Ixtapaluca es una entidad encargada de representar a la ciudadanía dentro del Ayuntamiento. Los regidores participan activamente en las decisiones que afectan al municipio, asegurando que las necesidades y preocupaciones de los habitantes sean consideradas en la gestión municipal.
            
                        <strong>Funciones Principales:</strong>
                        <ul>
                            <li><strong>Representación Ciudadana:</strong> Los regidores actúan como representantes de los ciudadanos, llevando sus inquietudes y propuestas al Ayuntamiento.</li>
                            <li><strong>Participación en Comisiones:</strong> Forman parte de diversas comisiones que abordan temas específicos como seguridad, desarrollo urbano, salud, educación, entre otros.</li>
                            <li><strong>Elaboración de Reglamentos:</strong> Contribuyen a la creación y modificación de reglamentos y normativas municipales para mejorar la administración y servicios públicos.</li>
                            <li><strong>Supervisión y Control:</strong> Vigilan el cumplimiento de las políticas y programas municipales, asegurando la transparencia y eficiencia en la gestión pública.</li>
                            <li><strong>Gestión de Recursos:</strong> Participan en la gestión y asignación de recursos municipales para proyectos y programas que beneficien a la comunidad.</li>
                        </ul>
                        </li>
                    </ul>
                `;
            case 'Direccion de Gobierno':
                return `
                    <p>Trámites que se realizan en el área de Predial:</p>
                    <ul>
                        <li>¿Qué es la Dirección de Gobierno?
                        La Dirección de Gobierno del municipio de Ixtapaluca es la entidad encargada de coordinar y supervisar las actividades gubernamentales y administrativas del municipio. Su objetivo es asegurar el buen funcionamiento del gobierno municipal y la implementación efectiva de políticas públicas que beneficien a la comunidad.
            
                        <strong>Funciones Principales:</strong>
                        <ul>
                            <li><strong>Coordinación Interinstitucional:</strong> Facilita la colaboración entre las diferentes dependencias municipales y con otras autoridades estatales y federales para la implementación de programas y proyectos.</li>
                            <li><strong>Supervisión de Políticas Públicas:</strong> Asegura que las políticas públicas se implementen de manera efectiva y conforme a los objetivos establecidos.</li>
                            <li><strong>Gestión Administrativa:</strong> Coordina las actividades administrativas del gobierno municipal para garantizar la eficiencia y transparencia en la gestión de recursos.</li>
                            <li><strong>Atención Ciudadana:</strong> Proporciona atención y servicios a los ciudadanos, facilitando la realización de trámites y la resolución de problemas.</li>
                            <li><strong>Promoción del Desarrollo Municipal:</strong> Implementa estrategias y programas que promuevan el desarrollo económico, social y cultural del municipio.</li>
                        </ul>
                        </li>
                    </ul>
                `;
            default:
                return '<p>No se encontró información adicional para la opción seleccionada.</p>';
    }
}