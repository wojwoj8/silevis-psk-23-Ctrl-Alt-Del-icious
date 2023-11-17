from rest_framework import serializers, exceptions
from .models import (
    User,
    Attachment1,
)

class Attatchment1Serializer(serializers.ModelSerializer):
    class Meta:
        model = Attachment1
        fields = '__all__'