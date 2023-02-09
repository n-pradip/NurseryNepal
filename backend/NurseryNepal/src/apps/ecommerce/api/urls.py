from rest_framework.routers import DefaultRouter
from django.urls.conf import path
from src.apps.ecommerce.api.views.views import ProductView, ProductCategoryView, SubscriptionCreateAPIView

router = DefaultRouter()
router.register(r'product', ProductView, basename='all_products')
router.register(r'product-category', ProductCategoryView, basename='product_categories')

urlpatterns = [
    path('subscribe/', SubscriptionCreateAPIView.as_view(), name='subscription-create'),

]

urlpatterns += router.urls

