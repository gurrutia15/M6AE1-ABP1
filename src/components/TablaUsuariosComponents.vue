<template>
  <div class="container w-50 p-5">
    <div class="table-responsive mt-5 rounded-table-container">
      <table class="table  align-middle ">
        <thead class="cabecera">
          <tr>
            <th scope="col">id</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Fecha de nacimiento</th>
            <th scope="col">Edad</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          <tr v-for="(usuario,idx) in usuarios" :key="usuario.id">
            <th scope="row"> {{ idx+1 }}</th>
            <td> {{ usuario.nombre }}</td>
            <td> {{ usuario.apellido }}</td>
            <td> {{ usuario.fecha_nacimiento }}</td>
            <td> {{ usuario.edad }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TablaUsuariosComponent',
  data() {
    return {
      usuarios: [
        {
          id: '1',
          nombre: 'Javier',
          apellido: 'Roldán',
          fecha_nacimiento: '14/07/1966',
          edad: '59'
        },
        {
          id: '2',
          nombre: 'Cristina',
          apellido: 'Rosales',
          fecha_nacimiento: '14/03/1997',
          edad: '28'
        },
        {
          id: '3',
          nombre: 'Javiera',
          apellido: 'Díaz',
          fecha_nacimiento: '23/02/2005',
          edad: '20'
        }
      ]
    }
  },
}
</script>

<style lang="css" scoped>
/* :deep para llegar a lo profundo del código sobretodo cuando se trabaja con scope */
:deep(thead.cabecera th) {
  background-color: #dddddd;
  color: #333 ;
  font-weight: 600;
}
:deep(tbody th){
   background-color: #fafafa;
   color: #333 ;
   font-weight: normal;
}
:deep(tbody td){
   background-color: #fafafa;
}
:deep(tbody){
  background-color: #fafafa;
}
/* 2. Contenedor con bordes redondeados */
:deep(.rounded-table-container) {
  overflow: hidden;               /* Esencial para que los bordes redondeen */
  border-radius: 12px;            /* Bordes suaves */
  border: 1px solid #dee2e6;      /* Borde suave para mantener estilo tabla */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.27); /*sombra sutil para levantar la tabla */
  background-color: #fafafa;
}
</style>