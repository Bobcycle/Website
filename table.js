const InitializeKshty = () => {
  // false = expanded on start
  // true = collapsed on start
  let CategoriesCollapsed = false
  
  if(CategoriesCollapsed === false) {
    $('.kshty-cat-dsp2').html('(Collapse)')
    $('.kshty-tbl tbody').attr('data-show', true)
    
  } else {
    $('.kshty-cat-dsp2').html('(Expand)')
    $('.kshty-tbl tbody').attr('data-show', false)
  }
}

$('.kshty-tab').on('click', function() {
  let id = $(this).attr('data-id')
  
  $('.kshty-tab').removeClass('active')
  $(this).addClass('active')
  $('.kshty-tbl').hide()
  $('.kshty-tbl[data-id="'+id+'"]').show()
})

$('.kshty-tbl-cat').on('click', function() {
  let id = $(this).attr('data-id')
  let show = $(this).attr('data-show')
  
  if(show == "true") {
    // Hide them
    $('.kshty-tbl-cat[data-id="'+id+'"] .kshty-cat-dsp2').html('(Expand)')
    $('.kshty-tbl tbody[data-id="'+id+'"]').attr('data-show', false)
    $('.kshty-tbl thead[data-id="'+id+'"]').attr('data-show', false)
    
    $('.kshty-tbl tbody[data-id="'+id+'"]').hide('slow');
  } else {
    // Show them
    $('.kshty-tbl-cat[data-id="'+id+'"] .kshty-cat-dsp2').html('(Collapse)')
    $('.kshty-tbl tbody[data-id="'+id+'"]').attr('data-show', true)
    $('.kshty-tbl thead[data-id="'+id+'"]').attr('data-show', true)
    
    $('.kshty-tbl tbody[data-id="'+id+'"]').show('slow');
  }
})

// Call function on document load / ready
$(() => {
  InitializeKshty()
});