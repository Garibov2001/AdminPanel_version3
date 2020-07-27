/**
 * Theme: Metrica - Responsive Bootstrap 4 Admin Dashboard
 * Author: Mannatthemes
 * Datatables Js
 */


$(document).ready(function () {
    $('#datatable').DataTable();

    $(document).ready(function () {
        $('#datatable2').DataTable();
    });

    //Buttons examples
    var table = $('#datatable-buttons').DataTable({
        lengthChange: false,
        buttons: ['copy', 'excel', 'pdf', 'colvis']
    });

    table.buttons().container()
        .appendTo('#datatable-buttons_wrapper .col-md-6:eq(0)');

    $('#row_callback').DataTable({
        "createdRow": function (row, data, index) {
            if (data[5].replace(/[\$,]/g, '') * 1 > 150000) {
                $('td', row).eq(5).addClass('highlight');
            }
        }
    });

});

/* Formatting function for row details - modify as you need */
function format(d) {
    // `d` is the original data object for the row
    return '<table class="table-gray col-12" cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
        '<tr>' +
        '<td>Tələbə:</td>' +
        '<td class="bg-light">' + d.full_name + '</td>' +
        '<td>Müəllim:</td>' +
        '<td class="bg-light">' + d.teacher + '</td>' +
        '<td>Rütbə:</td>' +
        '<td class="bg-light">' + d.badge + '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>Şəxsiyyət vəsiqəsinin nömrəsi:</td>' +
        '<td class="bg-light">' + d.id + '</td>' +
        '<td>Qrupu:</td>' +
        '<td class="bg-light">' + d.shift + '</td>' +
        '<td>Tip:</td>' +
        '<td class="bg-light">' + d.type + '</td>' +
        '</tr>' +
        '</table>' +
        '<div class="col-12 pt-3 d-flex justify-content-around bg-light">' +
        '<button type="button" class="btn btn-gradient-dark waves-effect waves-light float-right mb-3 col-2"> Roadmap </button>' +
        '<button type="button" class="btn btn-gradient-primary waves-effect waves-light float-right mb-3 col-2" data-toggle="modal" data-animation="bounce" data-target=".bs-info-modal-lg" > Tələbə </button>' +
        '<button type="button" class="btn btn-gradient-success waves-effect waves-light float-right mb-3 col-2" data-toggle="modal" data-animation="bounce" data-target=".bs-apply-modal-lg" > Müraciət </button>' +
        '<button type="button" class="btn btn-gradient-warning waves-effect waves-light float-right mb-3 col-2" data-toggle="modal" data-animation="bounce" data-target=".bs-payment-modal-lg" > Ödəmə </button>' +
        '<button type="button" class="btn btn-gradient-info waves-effect waves-light float-right mb-3 col-2" data-toggle="modal" data-animation="bounce" data-target=".bs-badge-modal-lg" > Rütbə </button>' +
        '</div>';
}

$(document).ready(function () {
    var table = $('#child_rows').DataTable({
        // "ajax": "../../plugins/datatables/objects.txt",
        "data": testdata.data,
        select: "single",
        "columns": [
            {
                "className": 'details-control',
                "orderable": false,
                "data": null,
                "defaultContent": ''
            },
            { "data": "name" },
            { "data": "surname" },
            { "data": "email" },
            { "data": "phone" },
            { "data": "status" },
            { "data": "date" }
        ],
        "order": [[1, 'asc']]
    });

    // Add event listener for opening and closing details
    $('#child_rows tbody').on('click', 'td.details-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row(tr);

        if (row.child.isShown()) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        }
        else {
            // Open this row
            row.child(format(row.data())).show();
            tr.addClass('shown');
        }
    });
});

var testdata = {
    "data": [
        {
            "name": "Mahmud",
            "surname": "Qəribov",
            "email": "mahmood.garibov@gmail.com",
            "phone": "0702568952",
            "status": "<span class=\"badge badge-md badge-soft-success\">Active</span>",
            "date": "01/08/2020",
            "full_name": "Mahmud Qəribov Elçin",
            "id": "AZ199999",
            "teacher": "Samir Kərimov",
            "shift": "HI-Səhər",
            "badge": "<i class=\"fas fa-chevron-up\"></i> Çavuş",
            "type": "<i class=\"dripicons-user text-success\"></i>"
        },
        {
            "name": "Tarlan",
            "surname": "Soltanov",
            "email": "soltanov.tarlan04@gmail.com",
            "phone": "0503856974",
            "status": "<span class=\"badge badge-md badge-soft-danger\">Deactive</span>",
            "date": "01/08/2020",
            "full_name": "Tarlan Soltanov Laçın",
            "id": "AZ199999",
            "teacher": "Samir Kərimov",
            "shift": "HS-Axşam",
            "badge": "<i class=\"fas fa-greater-than-equal\"></i> General",
            "type": "<i class=\"fas fa-graduation-cap text-success\"></i>"
        },
    ]
}


/* Formatting function for row details - modify as you need */
function toggler(d) {
    // `d` is the original data object for the row
    return '<table class="table-gray col-12" cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
        '<tr>' +
        '<td>Əməliiyat Qeydi:</td>' +
        '<td class="bg-light">' + d.extn + '</td>' +
        '</tr>' +
        '<td>Tələbə Şərhi:</td>' +
        '<td class="bg-light">' + d.comment + '</td>' +
        '</tr>' +
        '</table>';
}

$(document).ready(function () {
    var table = $('#student_apply').DataTable({
        // "ajax": "../../plugins/datatables/objects.txt",
        "data": studentdata.data,
        select: "single",
        "columns": [
            {
                "className": 'details-control',
                "orderable": false,
                "data": null,
                "defaultContent": ''
            },
            { "data": "type" },
            { "data": "person" },
            { "data": "status" },
            { "data": "date" }
        ],
        "order": [[1, 'asc']]
    });

    // Add event listener for opening and closing details
    $('#student_apply tbody').on('click', 'td.details-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row(tr);

        if (row.child.isShown()) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        }
        else {
            // Open this row
            row.child(toggler(row.data())).show();
            tr.addClass('shown');
        }
    });
});

var studentdata = {
    "data": [
        {
            "type": "Təklif",
            "person": "Həcər",
            "status": "done",
            "date": "18/05/2020",
            "extn": "Tələbə 2 günlük izin istədi. İzin verildi.",
            "comment": "razı"
        },
        {
            "type": "Şikayət",
            "person": "Həcər",
            "status": "done",
            "date": "18/05/2020",
            "extn": "Tələbə 2 günlük izin istədi. İzin verildi.",
            "comment": "narazı"
        },
    ]
}