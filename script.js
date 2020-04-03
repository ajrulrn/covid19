apiIndonesia()
apiProvince()

function apiProvince() {
    $.ajax({
        url: 'https://api.kawalcorona.com/indonesia/provinsi/',
        type: 'get',
        crossDomain: true,
        dataType: 'json',
    })
    .done(function(e) {
        $.each(e, function(index, el) {
        $('tbody').append(`
            <tr>
            <th scope="row">`+ el.attributes.Provinsi +`</th>
            <td class="text-center">`+ el.attributes.Kasus_Posi +`</td>
            <td class="text-center">`+ el.attributes.Kasus_Semb +`</td>
            <td class="text-center">`+ el.attributes.Kasus_Meni +`</td>
            </tr>
            `)
        })
    })
} 

function apiIndonesia() {
    $.ajax({
        url: 'https://api.thevirustracker.com/free-api?countryTotal=ID',
        type: 'GET',
        crossDomain: true,
        dataType: 'json',
    })
    .done(function(data) {
        let totalCase = data.countrydata[0].total_cases
        let activeCase = data.countrydata[0].total_active_cases
        let recovered = data.countrydata[0].total_recovered
        let deaths = data.countrydata[0].total_deaths
        
        $('#infected').html(totalCase)
        $('#active').html(activeCase)
        $('#recovered').html(recovered)
        $('#deaths').html(deaths)
        
        let percentageActive = Math.round((100 * (activeCase/totalCase)).toFixed(2)) + '%'
        let percentageRecovered = Math.round((100 * (recovered/totalCase)).toFixed(2)) + '%'
        let percentageDeaths = Math.round((100 * (deaths/totalCase)).toFixed(2)) + '%'
        $('.infected-bar').attr('title', totalCase)
        $('.active-bar').css('width', percentageActive)
        $('.active-bar').attr('title', percentageActive)
        $('.recover-bar').css('width', percentageRecovered)
        $('.recover-bar').attr('title', percentageRecovered)
        $('.death-bar').css('width', percentageDeaths)
        $('.death-bar').attr('title', percentageDeaths)
    })
    .fail(function() {
        alert('error response')
    })
}