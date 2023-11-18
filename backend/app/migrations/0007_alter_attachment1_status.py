# Generated by Django 4.2.3 on 2023-11-18 04:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0006_attachment1_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='attachment1',
            name='status',
            field=models.CharField(blank=True, choices=[('pending', 'Pending'), ('accepted', 'Accepted'), ('denied', 'Denied')], default='pending', max_length=20),
        ),
    ]
