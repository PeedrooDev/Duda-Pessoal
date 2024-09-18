 $(function(){
       // Adiciona o efeito de fadeToggle a todos os ícones
       $(".container_fqa1").on("click", function() {
        // Encontra o parágrafo imediatamente após o container_fqa1 que contém o ícone clicado
        $(this).closest(".container_fqa1").next("p").fadeToggle("slow");
    });
    

 })

