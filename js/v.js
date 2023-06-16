$(document).ready(function() {
    $("sekolah").change(function() {
      var selectedOption = $(this).children("option:selected").val();
      window.location.href = sekolah.html;
    });
  });
  $(document).ready(function() {
    $("#kategori").change(function() {
      var selectedOption = $(this).children("option:selected").val();
      window.location.href = selectedOption;
    });
  });
  $(document).ready(function() {
    $("#kategori").change(function() {
      var selectedOption = $(this).children("option:selected").val();
      window.location.href = selectedOption;
    });
  });
