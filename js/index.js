$(function() {
    $("[data-toggle='tooltip']").tooltip();
    $("[data-toggle='popover']").popover();
    $('.carousel').carousel({
      interval: 100
    });

    $('#contacto').on('shown.bs.modal', function (e){
      console.log('se ve el modal')
      $("#contactoBtn").removeClass('btn-outline-success')
      $("#contactoBtn").addClass('btn-primary')
      $("#contactoBtn").prop('disabled', true)

    });$('#contacto').on('show.bs.modal', function (e){
      console.log('se ve el modal, pero tarda')
    });
    $('#contacto').on('hide.bs.modal', function (e){
      console.log('se oculta el modal')
      $("#contactoBtn").removeClass('btn-primary')
      $("#contactoBtn").addClass('btn-outline-success')
      $("#contactoBtn").prop('disabled', false)

    });$('#contacto').on('hidden.bs.modal', function (e){
      console.log('se oculta el modal, pero tarda')
    });
  });