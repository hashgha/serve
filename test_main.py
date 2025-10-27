import unittest
from main import divide

class TestDivide(unittest.TestCase):
    def test_divide_by_zero(self):
        self.assertIsNone(divide(1, 0))

    def test_divide_success(self):
        self.assertEqual(divide(10, 2), 5)

if __name__ == '__main__':
    unittest.main()
