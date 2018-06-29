// Select color input
// Select size input
let height, width, color;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event) {
    event.preventDefault();
    height = $('#inputHeight').val();
    width = $('#inputWeight').val();
    makeGrid(height, width);
    console.log(height + width);

})

function makeGrid(i, j) {
    $('tr').remove();
    // Your code goes here!
    for (let index = 1; index <= i; index++) {
        $('#pixelCanvas').append('<tr id = table' + index + '></tr>')
        for (let count = 1; count <= j; count++) {
            $('#table' + index).append('<td></td>')
        }
    }
    // adding color to grid
    $('td').click(function addColor(){
        color = $('#colorPicker').val();

        if ($(this).attr('style')) {
            $(this).removeAttr('style')
        } else {
            $(this).attr('style', 'background-color:' + color)
        }
    })
}
