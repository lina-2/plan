@extends('base')
@section('title','calend')
@section ('content')

<body>
    <h1 class="logo5">Planner de Recette</h1>
    <table id="planner">
        <thead>
            <tr>
                <th>Joure</th>
                <th>Plat Principal</th>
                <th>Salade</th>
                <th>Dessert</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Lundi</td>
                <td contenteditable="true" id="LundiPlat"></td>
                <td contenteditable="true" id="LundiSalade"></td>
                <td contenteditable="true" id="LundiDessert"></td>
            </tr>
            <tr>
                <td>Mardi</td>
                <td contenteditable="true" id="MardiPlat"></td>
                <td contenteditable="true" id="MardiSalade"></td>
                <td contenteditable="true" id="MardiDessert"></td>
            </tr>
            <!-- Répétez ces lignes pour les autres jours de la semaine -->
        </tbody>
    </table>

    <button id="saveBtn">Enregistrer</button>
    <script src="/public/js.js"></script>
</body>


</body>


@endsection
