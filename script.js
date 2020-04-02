// $.ajax({
//     url: "https://api.kawalcorona.com",
//     type: 'get',
//     dataType: 'json',
//     crossDomain: true,
// }).done(function(data) {
//     console.log(data);
// })


apiProvince()

function apiProvince() {
    $('#searchButton').on('click', function() {
        let province = $('#searchInput').val();
        console.log(province)
    })
    $.ajax({
        url: 'https://api.kawalcorona.com/indonesia/provinsi/',
        type: 'get',
        crossDomain: true,
        dataType: 'json',
    })
    .done(function(e) {
        // console.log(e)
        $.each(e, function(index, el) {
        // console.log(el.attributes)
        $('tbody').append(`
        
        <tr>
        <th scope="row">`+ el.attributes.Provinsi +`</th>
        <td class="text-center">`+ el.attributes.Kasus_Posi +`</td>
        <td class="text-center">`+ el.attributes.Kasus_Semb +`</td>
        <td class="text-center">`+ el.attributes.Kasus_Meni +`</td>
        </tr>
        `)
    })
    // console.log(e)
    })
} 

$.ajax({
    // url: 'https://thevirustracker.com/free-api?countryTotal=ID',
    url: 'https://api.kawalcorona.com/',
    type: 'GET',
    crossDomain: true,
    dataType: 'json',
    })
    .done(function(e) {
    // console.log(e[37].attributes)
    // $.each(e, function(index, el) {
        // console.log(el.attributes)
        // })
        // console.log(e.countrydata[0])
    
        let totalCase = e[37].attributes.Confirmed
        let activeCase = e[37].attributes.Active
        let recovered = e[37].attributes.Recovered
        let deaths = e[37].attributes.Deaths

        $('#infected').html(totalCase)
        $('#active').html(activeCase)
        $('#recovered').html(recovered)
        $('#deaths').html(deaths)
    
        let percentageActive = Math.round((activeCase/totalCase) * 100) + '%'
        let percentageRecovered = Math.round((recovered/totalCase) * 100) + '%'
        let percentageDeaths = Math.round((deaths/totalCase) * 100) + '%'
        $('.infected-bar').attr('title', totalCase)
        $('.active-bar').css('width', percentageActive)
        $('.active-bar').attr('title', percentageActive)
        $('.recover-bar').css('width', percentageRecovered)
        $('.recover-bar').attr('title', percentageRecovered)
        $('.death-bar').css('width', percentageDeaths)
        $('.death-bar').attr('title', percentageDeaths)

        console.log(percentageActive)

        // $('#infected').html(e.countrydata[0].total_cases)
        // $('#active').html(e.countrydata[0].total_active_cases)
        // $('#recovered').html(e.countrydata[0].total_recovered)
        // $('#deaths').html(e.countrydata[0].total_deaths)
    
    console.log("success");
    })
    .fail(function() {
        alert('error response')
    // console.log("error");
    })
    // https://thevirustracker.com/free-api?countryTotal=ID