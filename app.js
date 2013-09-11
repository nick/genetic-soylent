/**
 * Controllers for the buttons and variables.
 */
$(function(){
    $('.start-genetic-algorithm').click(function(){
        $(this).hide();
        $('.pause-genetic-algorithm').show();
        testGeneticSoylent.autoGenerate = true;
        testGeneticSoylent.nextGeneration();
        return false;
    });

    $('.pause-genetic-algorithm').click(function(){
        testGeneticSoylent.autoGenerate = false;
        $(this).hide();
        $('.start-genetic-algorithm').show();
        return false;
    });

    $('.step-genetic-algorithm').click(function(){
        testGeneticSoylent.nextGeneration();
        return false;
    });

    $('.reset-genetic-algorithm').click(function(){
        testGeneticSoylent.reset();
        testGeneticSoylent.render();
        return false;
    });

    $('.death-rate').change(function(){
        testGeneticSoylent.deathRate = Number($(this).val());
    });

    $('.population').change(function(){
        testGeneticSoylent.populationSize = Number($(this).val());
    });

    $('.mutation-probability').change(function(){
        testGeneticSoylent.mutationProbability = Number($(this).val());
    });

    $('.mutation-multiplier').change(function(){
        testGeneticSoylent.mutationMultiplier = Number($(this).val());
    });

    testGeneticSoylent.render();
});
