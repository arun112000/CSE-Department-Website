# Generated by Django 2.1.5 on 2019-01-13 08:43

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Exfaculty',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Name', models.CharField(max_length=30)),
                ('Image', models.ImageField(upload_to='images/')),
                ('Post', models.CharField(max_length=30)),
                ('Intersts', models.CharField(max_length=30)),
                ('Email', models.EmailField(max_length=254)),
            ],
        ),
    ]
