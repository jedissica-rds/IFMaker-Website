# Use a imagem oficial do Ubuntu como base
FROM ubuntu:latest

# Atualize o sistema e instale o Apache
RUN apt-get update && apt-get install -y apache2

# Copie os arquivos do seu site para o diretório padrão do Apache
COPY . /var/www/html/

# Exponha a porta 80 para o tráfego web
EXPOSE 80

# Inicialize o Apache no modo em primeiro plano
CMD ["apache2ctl", "-D", "FOREGROUND"]