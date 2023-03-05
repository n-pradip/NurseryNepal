from rest_framework import generics, viewsets
from rest_framework.filters import SearchFilter

from src.apps.ecommerce.api.serializers.serializers import SubscriptionSerializer, ContactSerializer, ProductSerializer, \
    ProductCategorySerializer
from src.apps.ecommerce.models import SubscriptionModel, ContactModel, ProductCategoryModel, ProductModel


class ProductView(viewsets.ModelViewSet):
    queryset = ProductModel.objects.all()
    serializer_class = ProductSerializer
    # authentication_classes = [JWTAuthentication]
    # permission_classes = [IsAuthenticated]
    filter_backends = [SearchFilter]
    search_fields = ['product_name']


class ProductCategoryView(viewsets.ModelViewSet):
    queryset = ProductCategoryModel.objects.all()
    serializer_class = ProductCategorySerializer
    # authentication_classes = [JWTAuthentication]
    # permission_classes = [IsAuthenticated]
    filter_backends = [SearchFilter]
    search_fields = ['product_name']


class SubscriptionCreateAPIView(generics.CreateAPIView):
    queryset = SubscriptionModel.objects.all()
    serializer_class = SubscriptionSerializer


class ContactCreateAPIView(generics.CreateAPIView):
    queryset = ContactModel.objects.all()
    serializer_class = ContactSerializer
