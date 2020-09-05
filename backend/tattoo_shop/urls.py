from django.urls import path

from .views import (
    TattooSketchCreateView,
    CustomerCreateView,
    VacantTattooSketchListView,
    TattooSketchDetailView,
    CategoryListView,
    CreateOrderView,
    ProductDetailView,
    ProductsInCategoryListView,
    AddToCartDetailView,
    CartDetailView,
    AddToCartView,
    RemoveCartView,
    ClearCartView,
)

urlpatterns = [
    path('sketch/create/', TattooSketchCreateView.as_view()),
    path('customer/create/', CustomerCreateView.as_view()),
    path('sketch/vacant/', VacantTattooSketchListView.as_view()),
    path('sketch/<str:slug>/', TattooSketchDetailView.as_view()),
    path('categories/', CategoryListView.as_view()),
    path('order/create/', CreateOrderView.as_view(), name='create_order'),
    path('products/<str:ct_model>/<str:slug>/', ProductDetailView.as_view(), name='product_detail'),
    path('products/<str:ct_model>/', ProductsInCategoryListView.as_view(), name='products_list'),
    path('add-to-cart/<str:ct_model>/<str:slug>/', AddToCartDetailView.as_view(), name='add_to_cart'),
    path('cart/', CartDetailView.as_view(), name='cart'),
    path('add-to-cart/', AddToCartView.as_view(), name='add_to_cart'),
    path('remove-to-cart/', RemoveCartView.as_view(), name='remove_to_cart'),
    path('clear-cart/', ClearCartView.as_view(), name='clear_cart'),
]