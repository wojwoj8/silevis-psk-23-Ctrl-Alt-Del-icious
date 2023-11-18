from rest_framework import serializers, exceptions
from .models import (
    User,
    Attachment1,
    AdminData,
)

class Attatchment1Serializer(serializers.ModelSerializer):
    class Meta:
        model = Attachment1
        fields = '__all__'

class AdminDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdminData
        fields = '__all__'

