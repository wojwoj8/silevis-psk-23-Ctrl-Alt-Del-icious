# Generated by Django 4.2.3 on 2023-11-18 05:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0008_alter_attachment1_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='attachment1',
            name='koniec_praktyk',
            field=models.DateField(blank=True),
        ),
        migrations.AlterField(
            model_name='attachment1',
            name='start_praktyk',
            field=models.DateField(blank=True),
        ),
    ]
